import { NgModule } from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {EncoderComponent } from './components/encoder/encoder.component';
import {RouterOutlet} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {EncoderService} from "./core/services/encoder-service/encoder.service";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    EncoderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [Title, EncoderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
