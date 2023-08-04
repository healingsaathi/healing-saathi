import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockManagementComponent } from './component/stock-management/stock-management.component';
import { RescueManagementComponent } from './component/rescue-management/rescue-management.component';
import { RescueManagementTableComponent } from './component/rescue-management-table/rescue-management-table.component';

const routes: Routes = [
  {
    path: 'stock', component: StockManagementComponent
  },
  {
    path: 'rescue', component:RescueManagementComponent
  },
  {
    path: 'rescue-table', component:RescueManagementTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
