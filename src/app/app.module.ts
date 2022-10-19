import { TokenInterceptorProvider } from './_helpers/token.interceptor';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { AuthenticationModule } from './pages/authentication/authentication.module';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    LayoutModule,
    PagesModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AuthenticationModule,
  ],
  providers: [TokenInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
