import * as fromUI from './ui.actions';
var initState = {
    isLoading: false
};
export function uiReducer(state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case fromUI.ACTIVAR_LOADING:
            return {
                isLoading: true
            };
        case fromUI.DESACTIVAR_LOADING:
            return {
                isLoading: false
            };
        default:
            return state;
    }
}
//# sourceMappingURL=ui.reducer.js.map