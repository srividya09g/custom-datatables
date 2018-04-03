import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SrividyatableComponent } from './components/srividyatable/srividyatable.component';

import { MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { SrividyaService } from './services/srividya.service';


@NgModule({
  declarations: [
    AppComponent,
    SrividyatableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [ SrividyaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
