import { IBudget } from './../../_interfaces/i-budgets';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  constructor(private _httpClient: HttpClient) {}

  getAllBudgetByUserID(): Observable<IBudget[]> {
    return this._httpClient.get<IBudget[]>(
      environment.host + '/api/budget/user/' + localStorage.getItem('userID')
    );
  }
}
