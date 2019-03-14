import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var OrdenIngresoEgresoPipe = /** @class */ (function () {
    function OrdenIngresoEgresoPipe() {
    }
    OrdenIngresoEgresoPipe.prototype.transform = function (items) {
        return items.sort(function (a, b) {
            if (a.tipo === 'ingreso') {
                return -1;
            }
            else {
                return 1;
            }
        });
    };
    OrdenIngresoEgresoPipe = tslib_1.__decorate([
        Pipe({
            name: 'ordenIngresoEgreso'
        })
    ], OrdenIngresoEgresoPipe);
    return OrdenIngresoEgresoPipe;
}());
export { OrdenIngresoEgresoPipe };
//# sourceMappingURL=orden-ingreso-egreso.pipe.js.map