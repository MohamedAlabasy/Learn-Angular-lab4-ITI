import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringConvertPipe } from './string-convert.pipe';
import { SpliceArrayPipe } from './splice-array.pipe';
import { StarComponent } from './star/star.component';



@NgModule({
  declarations: [
    StringConvertPipe,
    SpliceArrayPipe,
    StarComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    StringConvertPipe,
    SpliceArrayPipe,
    StarComponent,
  ]
})
export class SharedModule { }
