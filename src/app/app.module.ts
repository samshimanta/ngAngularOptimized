import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListGenerator } from './shared/list-generator.service';
import { EmployeeListModule } from './employee-list/employee-list.module';
import {  ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule ,
    MatChipsModule
    // EmployeeListModule
  ],
  providers: [ListGenerator],
  bootstrap: [AppComponent]
})
export class AppModule { }
