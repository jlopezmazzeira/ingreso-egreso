import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                LoginComponent,
                RegisterComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                AngularFireAuthModule,
                RouterModule
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
export { AuthModule };
//# sourceMappingURL=auth.module.js.map