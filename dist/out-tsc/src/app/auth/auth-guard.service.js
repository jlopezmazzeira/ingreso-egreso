import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { take } from 'rxjs/operators';
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService) {
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function () {
        return this.authService.isAuth();
    };
    AuthGuardService.prototype.canLoad = function () {
        return this.authService.isAuth()
            .pipe(take(1));
    };
    AuthGuardService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService])
    ], AuthGuardService);
    return AuthGuardService;
}());
export { AuthGuardService };
//# sourceMappingURL=auth-guard.service.js.map