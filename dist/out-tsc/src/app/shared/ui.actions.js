export var ACTIVAR_LOADING = '[UI Loading] Cargando...';
export var DESACTIVAR_LOADING = '[UI Loading] Fin de la carga...';
var ActivarLoadingAction = /** @class */ (function () {
    function ActivarLoadingAction() {
        this.type = ACTIVAR_LOADING;
    }
    return ActivarLoadingAction;
}());
export { ActivarLoadingAction };
var DesactivarLoadingAction = /** @class */ (function () {
    function DesactivarLoadingAction() {
        this.type = DESACTIVAR_LOADING;
    }
    return DesactivarLoadingAction;
}());
export { DesactivarLoadingAction };
//# sourceMappingURL=ui.actions.js.map