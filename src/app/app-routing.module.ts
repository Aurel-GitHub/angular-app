import { BudgetDetailComponent } from './pages/budget/budget-detail/budget-detail.component';
import { ExpenseDetailComponent } from './pages/expense/expense-detail/expense-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './pages/user/user.component';
import { ExpenseComponent } from './pages/expense/expense.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { ExpenseAddComponent } from './pages/expense/expense-add/expense-add.component';
import { BudgetAddComponent } from './pages/budget/budget-add/budget-add.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'depense',
        component: ExpenseComponent,
        children: [
          {
            path: 'detail/:id',
            component: ExpenseDetailComponent,
          },
          {
            path: 'ajouter-une-depense',
            component: ExpenseAddComponent,
          },
        ],
      },
      {
        path: 'budget',
        component: BudgetComponent,
        children: [
          {
            path: 'detail/:id',
            component: BudgetDetailComponent,
          },
          {
            path: 'ajouter-un-budget',
            component: BudgetAddComponent,
          },
        ],
      },
      { path: 'profil', component: UserComponent },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
