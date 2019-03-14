import * as tslib_1 from "tslib";
import * as fromIngresoEgreso from './ingreso-egreso.actions';
var estadoInicial = {
    items: []
};
export function ingresoEgresoReducer(state, action) {
    if (state === void 0) { state = estadoInicial; }
    switch (action.type) {
        case fromIngresoEgreso.SET_ITEMS:
            return {
                items: action.items.map(function (item) {
                    return tslib_1.__assign({}, item);
                }).slice()
            };
        case fromIngresoEgreso.UNSET_ITEMS:
            return {
                items: []
            };
        default:
            return state;
    }
}
//# sourceMappingURL=ingreso-egreso.reducer.js.map