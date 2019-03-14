import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(store) {
        this.store = store;
        this.subscription = new Subscription();
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.store.select('auth')
            .pipe(filter(function (auth) { return auth.user != null; }))
            .subscribe(function (auth) { return _this.nombre = auth.user.nombre; });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    NavbarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [Store])
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map