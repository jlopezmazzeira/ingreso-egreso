import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { IngresoEgresoService } from '../ingreso-egreso/ingreso-egreso.service';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(ingresoEgresoService) {
        this.ingresoEgresoService = ingresoEgresoService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.ingresoEgresoService.initIngresoEgresoListener();
    };
    DashboardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [IngresoEgresoService])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map