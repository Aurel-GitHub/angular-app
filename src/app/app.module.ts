import { AuthenticationModule } from './pages/authentication/authentication.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ComponentsModule } from './components/components.module';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { BudgetDetailComponent } from './pages/budget/budget/budget-detail/budget-detail.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent, BudgetDetailComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ComponentsModule,
    LayoutModule,
    PagesModule,
    AuthenticationModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
