import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsMessageComponent } from './errors-message/errors-message.component';

@NgModule({
  declarations: [ErrorsMessageComponent],
  imports: [CommonModule, RouterModule],
  exports: [],
})
export class ComponentsModule {}
