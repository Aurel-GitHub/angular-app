import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { BudgetModule } from './budget/budget.module';
import { ExpenseModule } from './expense/expense.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeModule, UserModule, BudgetModule, ExpenseModule],
})
export class PagesModule {}
