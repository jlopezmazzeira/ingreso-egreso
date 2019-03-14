import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, store) {
        this.authService = authService;
        this.store = store;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.store.select('ui')
            .subscribe(function (ui) { return _this.cargando = ui.isLoading; });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoginComponent.prototype.onSubmit = function (data) {
        this.authService.login(data.email, data.password);
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            Store])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map