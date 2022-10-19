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
    firstname: new FormControl(''),
    lastname: new FormControl(''),
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

  handleForm() {
    if (!this.isSignupFormActived) {
      this.isSignupFormActived = true;
      this.haveAccountLabel = 'authentication.have_already_account';
      this.buttonLabel = 'authentication.button.label_signin';
    } else {
      this.isSignupFormActived = false;
      this.haveAccountLabel = 'authentication.dont_have_account';
      this.buttonLabel = 'authentication.button.label_signup';
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const credentials: ICredentials = {
        email: this.form.value.email,
        password: this.form.value.password,
      };
      /**
       * todo - mettre required conditionné dans le template de first,lastname
       * todo - ajouter dans la condition en fonction du mode
       * todo - ajouter dans le credentials les props manquantes
       * todo - mettre en place le service en fonction du mode
       */
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
  }
}
