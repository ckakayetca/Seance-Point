import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegexDirective } from './directives/regex.directive';
import { TimeFromNowPipe } from './pipes/time-from-now.pipe';
import { DatePipe } from './pipes/date.pipe';



@NgModule({
  declarations: [
    RegexDirective,
    TimeFromNowPipe,
    DatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RegexDirective,
    TimeFromNowPipe,
    DatePipe,
  ]
})
export class SharedModule { }
