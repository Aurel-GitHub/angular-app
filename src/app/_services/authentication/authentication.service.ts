import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAuthentication, ICredentials } from 'src/app/_interfaces';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  /**
   * todo - set up unit test to login & islogged
   * todo - set up e2e to test login & token in localstorage
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
