import { LayoutModule } from './layout/layout.module';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { BudgetModule } from './budget/budget.module';
import { ExpenseModule } from './expense/expense.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExpenseModule,
    BudgetModule,
    HomeModule,
    LayoutModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
