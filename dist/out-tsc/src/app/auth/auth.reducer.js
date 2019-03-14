import * as tslib_1 from "tslib";
import * as fromAuth from './auth.actions';
var initState = {
    user: null
};
export function authReducer(state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case fromAuth.SET_USER:
            return {
                user: tslib_1.__assign({}, action.user)
            };
        case fromAuth.UNSET_USER:
            return {
                user: null
            };
        default:
            return state;
    }
}
//# sourceMappingURL=auth.reducer.js.map