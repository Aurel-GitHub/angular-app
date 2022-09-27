import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
// import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  // HOST = environment.host;
  HOST = 'http://localhost/';

  login(
    form: FormGroup<{
      email: FormControl<string | null>;
      password: FormControl<string | null>;
    }>
  ): void {
    console.log('form:', form);
    this.httpClient.post(this.HOST + '/auth/login', form).subscribe({
      complete() {
        console.log('yes!!!');
      },
      error() {
        console.error('Error');
      },
    });
  }
}
