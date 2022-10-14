import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IExpenses } from 'src/app/_interfaces/i-expenses';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private _httpClient: HttpClient) { }

  getAllExpensesByUserID(): Observable<IExpenses[]> {
    return this._httpClient.get<IExpenses[]>(
      environment.host + '/api/expense/user/' + localStorage.getItem('userID')
    );
  }
}
