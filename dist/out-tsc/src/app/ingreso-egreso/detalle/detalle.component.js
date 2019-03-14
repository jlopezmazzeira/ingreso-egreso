import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// import { AppState } from '../../app.reducer';
import { Subscription } from 'rxjs';
import { IngresoEgresoService } from '../ingreso-egreso.service';
import Swal from 'sweetalert2';
var DetalleComponent = /** @class */ (function () {
    function DetalleComponent(store, ingresoEgresoService) {
        this.store = store;
        this.ingresoEgresoService = ingresoEgresoService;
        this.subscription = new Subscription();
    }
    DetalleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.store.select('ingresoEgreso')
            .subscribe(function (ingresoEgreso) {
            _this.items = ingresoEgreso.items;
        });
    };
    DetalleComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DetalleComponent.prototype.borrarItem = function (item) {
        this.ingresoEgresoService.borrarIngresoEgreso(item.uid)
            .then(function () {
            Swal('Item eliminado', item.descripcion, 'success');
        });
    };
    DetalleComponent = tslib_1.__decorate([
        Component({
            selector: 'app-detalle',
            templateUrl: './detalle.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [Store,
            IngresoEgresoService])
    ], DetalleComponent);
    return DetalleComponent;
}());
export { DetalleComponent };
//# sourceMappingURL=detalle.component.js.map