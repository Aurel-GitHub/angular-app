import { UserComponent } from './user/user.component';
import { ExpenseComponent } from './expense/expense.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BudgetComponent } from './budget/budget.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'depense', component: ExpenseComponent },
  { path: 'budget', component: BudgetComponent },
  { path: 'profil', component: UserComponent },
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
