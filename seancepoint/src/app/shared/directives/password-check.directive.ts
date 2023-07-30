import { Directive } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

function checkPasswords(): ValidatorFn {
  return (control: AbstractControl) => {
    const group: FormGroup = control as FormGroup;
    const pass = group.controls['password'];
    const rePass = group.controls['rePassword'];

    if (pass && rePass) {
      return pass.value === rePass.value ? null : { passwordCheck: true };
    }

    return { passwordCheck: true };
  };
}

@Directive({
  selector: '[appPasswordCheck]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordCheckDirective,
      multi: true,
    },
  ],
})
export class PasswordCheckDirective {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    return checkPasswords()(control);
  }
}
