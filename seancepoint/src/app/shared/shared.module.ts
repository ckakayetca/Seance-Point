import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegexDirective } from './directives/regex.directive';
import { TimeFromNowPipe } from './pipes/time-from-now.pipe';
import { DatePipe } from './pipes/date.pipe';
import { PasswordCheckDirective } from './directives/password-check.directive';



@NgModule({
  declarations: [
    RegexDirective,
    TimeFromNowPipe,
    DatePipe,
    PasswordCheckDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RegexDirective,
    PasswordCheckDirective,
    TimeFromNowPipe,
    DatePipe,
  ]
})
export class SharedModule { }
