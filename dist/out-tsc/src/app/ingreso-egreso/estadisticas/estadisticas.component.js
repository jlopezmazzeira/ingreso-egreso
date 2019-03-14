import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// import { AppState } from '../../app.reducer';
import { Subscription } from 'rxjs';
var EstadisticasComponent = /** @class */ (function () {
    function EstadisticasComponent(store) {
        this.store = store;
        this.subscription = new Subscription();
        this.doughnutChartLabels = ['Ingresos', 'Egresos'];
        this.doughnutChartData = [];
    }
    EstadisticasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.store.select('ingresoEgreso')
            .subscribe(function (ingresoEgreso) {
            _this.contarIngresoEgreso(ingresoEgreso.items);
        });
    };
    EstadisticasComponent.prototype.contarIngresoEgreso = function (items) {
        var _this = this;
        this.ingresos = 0;
        this.egresos = 0;
        this.cuantosEgresos = 0;
        this.cuantosIngresos = 0;
        items.forEach(function (item) {
            if (item.tipo === 'ingreso') {
                _this.cuantosIngresos++;
                _this.ingresos += item.monto;
            }
            else {
                _this.cuantosEgresos++;
                _this.egresos += item.monto;
            }
        });
        this.doughnutChartData = [this.ingresos, this.egresos];
    };
    EstadisticasComponent = tslib_1.__decorate([
        Component({
            selector: 'app-estadisticas',
            templateUrl: './estadisticas.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [Store])
    ], EstadisticasComponent);
    return EstadisticasComponent;
}());
export { EstadisticasComponent };
//# sourceMappingURL=estadisticas.component.js.map