import { Directive, Input, OnInit } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, ValidatorFn } from '@angular/forms';


export function regexValidator(regExp: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const pass = regExp.test(control.value)
    return pass ? null : { regexValidator: true }
  }
}


@Directive({
  selector: '[appRegex]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: RegexDirective, multi: true}
  ]
})
export class RegexDirective {
  @Input('appRegex') regExp: RegExp = new RegExp('');

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return regexValidator(this.regExp)(control);
  }


}
