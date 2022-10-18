import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorsMessageComponent } from 'src/app/components/errors-message/errors-message.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ErrorsMessageComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class AuthenticationModule {}
