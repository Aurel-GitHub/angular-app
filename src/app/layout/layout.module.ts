import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, ComponentsModule],
  exports: [HeaderComponent],
})
export class LayoutModule {}
