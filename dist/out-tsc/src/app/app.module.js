import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modulos
import { AppRoutingModule } from './app-routing.module';
// Ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './app.reducer';
// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// Modulos personlizados
import { AuthModule } from './auth/auth.module';
// Environment
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule,
                AuthModule,
                AppRoutingModule,
                AngularFireModule.initializeApp(environment.firebase),
                AngularFirestoreModule,
                StoreModule.forRoot(appReducers),
                StoreDevtoolsModule.instrument({
                    maxAge: 25,
                    logOnly: environment.production,
                }),
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map