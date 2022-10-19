import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorsMessageComponent } from 'src/app/components/errors-message/errors-message.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LoginComponent, ErrorsMessageComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule],
})
export class AuthenticationModule {}
