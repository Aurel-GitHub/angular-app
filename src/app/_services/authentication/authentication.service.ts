import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  login(
    form: FormGroup<{
      email: FormControl<string | null>;
      password: FormControl<string | null>;
    }>
  ): void {
    if (form.valid) {
      this.httpClient
        .post(environment.host + '/api/auth/login', form.value)
        .subscribe({
          error: e => console.error(e),
          complete: () => console.log('complete !!!!!'),
        });
    }
  }
}
