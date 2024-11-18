import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatChipsModule ,
    MatFormFieldModule,
    MatInputModule
  ] ,
  exports: [
    MatChipsModule ,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule { }
