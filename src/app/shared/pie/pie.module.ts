import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { PieComponent } from './pie.component';

@NgModule({
  declarations: [
    PieComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports : [ PieComponent ]
})
export class PieModule { }
