import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICredentials, IAuthentication } from 'src/app/_interfaces';
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
  login(credentials: ICredentials): Observable<IAuthentication> {
    return this.httpClient.post<IAuthentication>(
      environment.host + '/api/auth/login',
      credentials
    );
  }

  isLogged(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
}
