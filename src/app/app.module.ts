import { TokenInterceptorProvider } from './_helpers/token.interceptor';
import { AuthenticationModule } from './pages/authentication/authentication.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LayoutComponent } from './layout/layout.component';
import { ComponentsModule } from './components/components.module';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ComponentsModule,
    LayoutModule,
    PagesModule,
    AuthenticationModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [TokenInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
