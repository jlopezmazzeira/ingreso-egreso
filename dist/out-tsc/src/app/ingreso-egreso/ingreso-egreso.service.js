import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { SetItemsAction, UnsetItemsAction } from './ingreso-egreso.actions';
import { Subscription } from 'rxjs';
var IngresoEgresoService = /** @class */ (function () {
    function IngresoEgresoService(afDB, authService, store) {
        this.afDB = afDB;
        this.authService = authService;
        this.store = store;
        this.ingresoEgresoListerSubscription = new Subscription();
        this.ingresoEgresoItemsSubscription = new Subscription();
    }
    IngresoEgresoService.prototype.initIngresoEgresoListener = function () {
        var _this = this;
        this.ingresoEgresoListerSubscription = this.store.select('auth')
            .pipe(filter(function (auth) { return auth.user != null; }))
            .subscribe(function (auth) {
            return _this.ingresoEgresoItems(auth.user.uid);
        });
    };
    IngresoEgresoService.prototype.ingresoEgresoItems = function (uid) {
        var _this = this;
        this.ingresoEgresoItemsSubscription = this.afDB.collection(uid + "/ingresos-egresos/items")
            .snapshotChanges()
            .pipe(map(function (docData) {
            return docData.map(function (doc) {
                return tslib_1.__assign({ uid: doc.payload.doc.id }, doc.payload.doc.data());
            });
        }))
            .subscribe(function (coleccion) {
            _this.store.dispatch(new SetItemsAction(coleccion));
        });
    };
    IngresoEgresoService.prototype.cancerlarSubscriptions = function () {
        this.ingresoEgresoItemsSubscription.unsubscribe();
        this.ingresoEgresoListerSubscription.unsubscribe();
        this.store.dispatch(new UnsetItemsAction());
    };
    IngresoEgresoService.prototype.crearIngresoEgreso = function (ingresoEgreso) {
        var user = this.authService.getUsuario();
        return this.afDB.doc(user.uid + "/ingresos-egresos")
            .collection('items').add(tslib_1.__assign({}, ingresoEgreso));
    };
    IngresoEgresoService.prototype.borrarIngresoEgreso = function (uid) {
        var user = this.authService.getUsuario();
        return this.afDB.doc(user.uid + "/ingresos-egresos/items/" + uid)
            .delete();
    };
    IngresoEgresoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore,
            AuthService,
            Store])
    ], IngresoEgresoService);
    return IngresoEgresoService;
}());
export { IngresoEgresoService };
//# sourceMappingURL=ingreso-egreso.service.js.map