import { Component, OnInit } from '@angular/core';
import { IBudget } from 'src/app/_interfaces';
import { BudgetService } from 'src/app/_services/budget/budget.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {
  budgetsList!: IBudget[];

  constructor(private _budgetService: BudgetService) {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    this._budgetService.getAllBudgetByUserID().subscribe({
      error: (error: Error) => console.error(error),
      next: (data: IBudget[]) => {
        this.budgetsList = data;
      },
    });
  }
}
