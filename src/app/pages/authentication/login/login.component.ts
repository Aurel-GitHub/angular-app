import { LocalStorageService } from 'src/app/_services/local-storage/local-storage.service';
import { ICredentials, IAuthentication } from 'src/app/_interfaces';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication/authentication.service';

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

  form: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
  }> = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    if (this.form.valid) {
      const credentials: ICredentials = {
        email: this.form.value.email,
        password: this.form.value.password,
      };

      this._authenticationService.login(credentials).subscribe({
        complete: () => console.log('user connected'),
        error: (err: Error) => console.error('error:', err),
        next: (res: IAuthentication) => {
          this._localStorageService.setItemLocalStorage(res);
        },
      });
    }
  }
}
