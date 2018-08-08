import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';

import { SharedMaterialModule } from './sharedMaterial-module';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorage } from './local.storage';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    CdkTableModule,
    HttpClientModule
  ],
  providers: [LocalStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
