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

  login(credentials: ICredentials): Observable<IAuthentication> {
    console.log('HELLO FROM SERVICE');
    return this.httpClient.post<IAuthentication>(
      environment.host + '/api/auth/login',
      credentials
    );
  }
  signup(credentials: ICredentials): Observable<IAuthentication> {
    return this.httpClient.post<IAuthentication>(
      environment.host + '/api/auth/signup',
      credentials
    );
  }

  isLogged(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  disconnect(): Observable<IAuthentication> {
    return this.httpClient.get<IAuthentication>(
      environment.host + '/api/auth/logout'
    );
  }
}
