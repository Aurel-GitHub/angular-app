import { ComponentsModule } from './../../components/components.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetComponent } from './budget.component';
import { BudgetDetailComponent } from './budget-detail/budget-detail.component';
import { BudgetAddComponent } from './budget-add/budget-add.component';

@NgModule({
  declarations: [BudgetComponent, BudgetDetailComponent, BudgetAddComponent],
  imports: [CommonModule, RouterModule, ComponentsModule],
  exports: [BudgetComponent],
})
export class BudgetModule {}
