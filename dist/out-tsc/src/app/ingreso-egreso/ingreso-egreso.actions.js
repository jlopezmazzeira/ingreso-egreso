export var SET_ITEMS = '[Ingreso Egreso] Set items';
export var UNSET_ITEMS = '[Ingreso Egreso] Unset items';
var SetItemsAction = /** @class */ (function () {
    function SetItemsAction(items) {
        this.items = items;
        this.type = SET_ITEMS;
    }
    return SetItemsAction;
}());
export { SetItemsAction };
var UnsetItemsAction = /** @class */ (function () {
    function UnsetItemsAction() {
        this.type = UNSET_ITEMS;
    }
    return UnsetItemsAction;
}());
export { UnsetItemsAction };
//# sourceMappingURL=ingreso-egreso.actions.js.map