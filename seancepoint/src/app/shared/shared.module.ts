import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegexDirective } from './regex.directive';
import { TimeFromNowPipe } from './pipes/time-from-now.pipe';



@NgModule({
  declarations: [
    RegexDirective,
    TimeFromNowPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RegexDirective,
    TimeFromNowPipe
  ]
})
export class SharedModule { }
