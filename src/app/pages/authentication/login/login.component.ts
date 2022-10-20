import { LocalStorageService } from 'src/app/_services/local-storage/local-storage.service';
import { ICredentials, IAuthentication } from 'src/app/_interfaces';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private _authenticationService: AuthenticationService,
    private _localStorageService: LocalStorageService
  ) {}
  isSignupFormActived: boolean = false;
  haveAccountLabel: string = 'authentication.dont_have_account';
  buttonLabel: string = 'authentication.button.label_signup';
  errorFromApi!: HttpErrorResponse;
  form: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    firstname: FormControl<string | null>;
    lastname: FormControl<string | null>;
  }> = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    firstname: new FormControl('', [Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.minLength(3)]),
  });

  get email() {
    return this.form.controls.email;
  }

  get password() {
    return this.form.controls.password;
  }

  get firstname() {
    return this.form.controls.firstname;
  }

  get lastname() {
    return this.form.controls.lastname;
  }

  handleColorInput(inputCtrl: FormControl): string {
    if (inputCtrl.errors && inputCtrl.touched) {
      return '#FF6370';
    } else if (inputCtrl.status === 'VALID' && inputCtrl.touched) {
      return '#70CF97';
    }
    return '#1F2128';
  }
  debugForm() {
    console.log('form', this.form);
  }

  handleForm() {
    this.form.reset();
    if (!this.isSignupFormActived) {
      this.isSignupFormActived = true;
      console.log('2', this.isSignupFormActived);
      this.haveAccountLabel = 'authentication.have_already_account';
      this.buttonLabel = 'authentication.button.label_signin';
    } else {
      this.isSignupFormActived = false;
      this.firstname.clearValidators();
      this.firstname.updateValueAndValidity();
      this.lastname.clearValidators();
      this.lastname.updateValueAndValidity();
      console.log('3', this.isSignupFormActived);
      this.haveAccountLabel = 'authentication.dont_have_account';
      this.buttonLabel = 'authentication.button.label_signup';
    }
  }

  login(credentials: ICredentials) {
    this._authenticationService.login(credentials).subscribe({
      error: (error: HttpErrorResponse) => {
        this.errorFromApi = error;
        console.error('error:', error);
      },
      next: (res: IAuthentication) => {
        this._localStorageService.setItemLocalStorage(res);
      },
    });
  }

  onSubmit() {
    if (this.form.valid) {
      let credentials!: ICredentials;
      if (!this.isSignupFormActived) {
        credentials = {
          email: this.email.value,
          password: this.password.value,
        };
        this.login(credentials);
      } else {
        credentials = {
          email: this.email.value,
          password: this.password.value,
          firstname: this.firstname.value,
          lastname: this.lastname.value,
        };
        this._authenticationService.signup(credentials).subscribe({
          error: (error: HttpErrorResponse) => {
            this.errorFromApi = error;
            console.error(error);
          },
          next: () => this.login(credentials),
        });
      }
    }
  }
}
