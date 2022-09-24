import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense.component';
import { ExpenseAddComponent } from './expense-add/expense-add.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ExpenseComponent, ExpenseAddComponent, ExpenseDetailComponent],
  imports: [CommonModule, RouterModule],
})
export class ExpenseModule {}
