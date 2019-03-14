import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { ActivarLoadingAction, DesactivarLoadingAction } from '../shared/ui.actions';
import { SetUserAction, UnsetUserAction } from './auth.actions';
import { User } from './user.model';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router, afDB, store) {
        this.afAuth = afAuth;
        this.router = router;
        this.afDB = afDB;
        this.store = store;
        this.userSubscription = new Subscription();
    }
    AuthService.prototype.crearUsuario = function (nombre, email, password) {
        var _this = this;
        this.store.dispatch(new ActivarLoadingAction());
        this.afAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (resp) {
            var user = {
                uid: resp.user.uid,
                nombre: nombre,
                email: resp.user.email
            };
            _this.afDB.doc(user.uid + "/usuario")
                .set(user)
                .then(function () {
                _this.router.navigate(['/']);
                _this.store.dispatch(new DesactivarLoadingAction());
            });
        })
            .catch(function (error) {
            console.log(error);
            _this.store.dispatch(new DesactivarLoadingAction());
            Swal('Error en el registro', error.message, 'error');
        });
    };
    AuthService.prototype.initAuthListener = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (fbUser) {
            if (fbUser) {
                _this.userSubscription = _this.afDB.doc(fbUser.uid + "/usuario").valueChanges()
                    .subscribe(function (usuarioObj) {
                    var newUser = new User(usuarioObj);
                    _this.store.dispatch(new SetUserAction(usuarioObj));
                    _this.usuario = newUser;
                });
            }
            else {
                _this.usuario = null;
                _this.userSubscription.unsubscribe();
            }
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        this.store.dispatch(new ActivarLoadingAction());
        this.afAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then(function (resp) {
            _this.router.navigate(['/']);
            _this.store.dispatch(new DesactivarLoadingAction());
        })
            .catch(function (error) {
            console.log(error);
            _this.store.dispatch(new DesactivarLoadingAction());
            Swal('Error en el login', error.message, 'error');
        });
    };
    AuthService.prototype.logout = function () {
        this.router.navigate(['/login']);
        this.afAuth.auth.signOut();
        this.store.dispatch(new UnsetUserAction());
    };
    AuthService.prototype.isAuth = function () {
        var _this = this;
        return this.afAuth.authState
            .pipe(map(function (fbUser) {
            if (fbUser == null) {
                _this.router.navigate(['/login']);
            }
            return fbUser != null;
        }));
    };
    AuthService.prototype.getUsuario = function () {
        return tslib_1.__assign({}, this.usuario);
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth,
            Router,
            AngularFirestore,
            Store])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map