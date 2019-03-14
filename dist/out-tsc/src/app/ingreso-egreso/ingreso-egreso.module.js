import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Graficas
import { ChartsModule } from 'ng2-charts';
// Modulos personalizados
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { IngresoEgresoComponent } from './ingreso-egreso.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { DetalleComponent } from './detalle/detalle.component';
import { OrdenIngresoEgresoPipe } from './orden-ingreso-egreso.pipe';
import { StoreModule } from '@ngrx/store';
import { ingresoEgresoReducer } from './ingreso-egreso.reducer';
var IngresoEgresoModule = /** @class */ (function () {
    function IngresoEgresoModule() {
    }
    IngresoEgresoModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DashboardComponent,
                IngresoEgresoComponent,
                EstadisticasComponent,
                DetalleComponent,
                OrdenIngresoEgresoPipe,
                StoreModule.forFeature('ingresoEgreso', ingresoEgresoReducer)
            ],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                ChartsModule,
                SharedModule,
                DashboardRoutingModule
            ]
        })
    ], IngresoEgresoModule);
    return IngresoEgresoModule;
}());
export { IngresoEgresoModule };
//# sourceMappingURL=ingreso-egreso.module.js.map