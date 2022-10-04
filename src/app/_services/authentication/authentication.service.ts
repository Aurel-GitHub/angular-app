import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICredentials } from 'src/app/_interfaces';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  /**
   * @param credentials
   * @returns
   */
  login(credentials: ICredentials): Observable<Object> {
    console.log('=> ', credentials);
    return this.httpClient.post(
      environment.host + '/api/auth/login',
      credentials
    );
  }
}
