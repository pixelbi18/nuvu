import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CommonModule} from '@angular/common';
import { CabeceraComponent } from './cabecera.component';

@NgModule({
  declarations: [
    CabeceraComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports : [ CabeceraComponent ],
  imports : [CommonModule]
})
export class CabeceraModule { }
