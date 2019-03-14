import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IngresoEgreso } from './ingreso-egreso.model';
import { IngresoEgresoService } from './ingreso-egreso.service';
import Swal from 'sweetalert2';
// import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ActivarLoadingAction, DesactivarLoadingAction } from '../shared/ui.actions';
var IngresoEgresoComponent = /** @class */ (function () {
    function IngresoEgresoComponent(ingresoEgresoService, store) {
        this.ingresoEgresoService = ingresoEgresoService;
        this.store = store;
        this.tipo = 'ingreso';
        this.loading = new Subscription();
    }
    IngresoEgresoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = this.store.select('ui')
            .subscribe(function (ui) { return _this.cargando = ui.isLoading; });
        this.forma = new FormGroup({
            'descripcion': new FormControl('', Validators.required),
            'monto': new FormControl(0, Validators.min(0))
        });
    };
    IngresoEgresoComponent.prototype.ngOnDestroy = function () {
        this.loading.unsubscribe();
    };
    IngresoEgresoComponent.prototype.crearIngresoEgreso = function () {
        var _this = this;
        this.store.dispatch(new ActivarLoadingAction());
        var ingresoEgreso = new IngresoEgreso(tslib_1.__assign({}, this.forma.value, { tipo: this.tipo }));
        this.ingresoEgresoService.crearIngresoEgreso(ingresoEgreso)
            .then(function () {
            _this.store.dispatch(new DesactivarLoadingAction());
            Swal('Creado', ingresoEgreso.descripcion, 'success');
            _this.forma.reset({
                monto: 0
            });
        })
            .catch();
    };
    IngresoEgresoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-ingreso-egreso',
            templateUrl: './ingreso-egreso.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [IngresoEgresoService,
            Store])
    ], IngresoEgresoComponent);
    return IngresoEgresoComponent;
}());
export { IngresoEgresoComponent };
//# sourceMappingURL=ingreso-egreso.component.js.map