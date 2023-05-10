import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ModeToggleService} from "./core/modules/mode/mode-toggle.service";
import {MODE_STORAGE_SERVICE, ModeLocalStorageService} from "./core/modules/mode/mode-storage.service";
import {ServerErrorsInterceptorService} from "./core/services/error-handling/servererrors.service";
import {HttpConfigInterceptor} from "./core/interceptor/http.interceptor";
import { AntDesignModules } from "./core/modules/antdesign.module";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AntDesignModules
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    ModeToggleService,
    {
      provide: MODE_STORAGE_SERVICE,
      useClass: ModeLocalStorageService,
    },
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorsInterceptorService,
      multi:true
    },
    { provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
