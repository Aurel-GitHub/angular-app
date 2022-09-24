import { BudgetModule } from './pages/budget/budget.module';
import { ExpenseModule } from './pages/expense/expense.module';
import { UserModule } from './pages/user/user.module';
import { HomeModule } from './pages/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LayoutComponent } from './layout/layout.component';
import { ComponentsModule } from './components/components.module';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { BudgetDetailComponent } from './budget/budget-detail/budget-detail.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent, BudgetDetailComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ComponentsModule,
    LayoutModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
