import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './pages/user/user.component';
import { ExpenseComponent } from './pages/expense/expense.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BudgetComponent } from './pages/budget/budget.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'depense', component: ExpenseComponent },
      { path: 'budget', component: BudgetComponent },
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
