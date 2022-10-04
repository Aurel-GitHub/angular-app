import { IAuthentication } from './../../_interfaces/i-authentication';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private router: Router) {}

  setItemLocalStorage(item: IAuthentication): void {
    localStorage.setItem('token', item.token);
    localStorage.setItem('firstname', item.firstname);
    localStorage.setItem('userID', item.userId);
    this.router.navigate(['/']);
  }
}
