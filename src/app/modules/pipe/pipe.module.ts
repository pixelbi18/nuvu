import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../../pipes/safe.pipe';
import { ValueArrayPipe } from '../../pipes/array.pipe';



@NgModule({
  declarations: [SafePipe, ValueArrayPipe],
  imports: [
    CommonModule
  ],
  exports: [SafePipe, ValueArrayPipe]
})
export class PipeModule { }
