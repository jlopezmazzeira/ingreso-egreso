import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, store) {
        this.authService = authService;
        this.store = store;
        this.subscription = new Subscription();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.store.select('ui')
            .subscribe(function (ui) { return _this.cargando = ui.isLoading; });
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    RegisterComponent.prototype.onSubmit = function (data) {
        this.authService.crearUsuario(data.nombre, data.email, data.password);
    };
    RegisterComponent = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            Store])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map