export var SET_USER = '[Auth] Set User';
export var UNSET_USER = '[Auth] Unset User';
var SetUserAction = /** @class */ (function () {
    function SetUserAction(user) {
        this.user = user;
        this.type = SET_USER;
    }
    return SetUserAction;
}());
export { SetUserAction };
var UnsetUserAction = /** @class */ (function () {
    function UnsetUserAction() {
        this.type = UNSET_USER;
    }
    return UnsetUserAction;
}());
export { UnsetUserAction };
//# sourceMappingURL=auth.actions.js.map