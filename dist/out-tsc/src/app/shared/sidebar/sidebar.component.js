import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { IngresoEgresoService } from '../../ingreso-egreso/ingreso-egreso.service';
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authService, store, ingresoEgresoService) {
        this.authService = authService;
        this.store = store;
        this.ingresoEgresoService = ingresoEgresoService;
        this.subscription = new Subscription();
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.store.select('auth')
            .pipe(filter(function (auth) { return auth.user != null; }))
            .subscribe(function (auth) { return _this.nombre = auth.user.nombre; });
    };
    SidebarComponent.prototype.logout = function () {
        this.authService.logout();
        this.ingresoEgresoService.cancerlarSubscriptions();
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SidebarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            Store,
            IngresoEgresoService])
    ], SidebarComponent);
    return SidebarComponent;
}());
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map