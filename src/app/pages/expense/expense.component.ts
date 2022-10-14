import { Component, OnInit } from '@angular/core';
import { IExpenses } from 'src/app/_interfaces';
import { ExpenseService } from 'src/app/_services/expense/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {
  expensesList!: IExpenses[];
  isLoading: boolean = false;

  constructor(private _expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.isLoading = true;
    this._expenseService.getAllExpensesByUserID().subscribe({
      error: (error: Error) => console.error(error),
      next: (data: IExpenses[]) => {
        this.expensesList = data;
        this.isLoading = false;
      },
    });
  }
}
