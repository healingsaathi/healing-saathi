import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CardModule } from 'primeng/card';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';

import { ManagementRoutingModule } from './management-routing.module';
import { StockManagementComponent } from './component/stock-management/stock-management.component';
import { RescueManagementComponent } from './component/rescue-management/rescue-management.component';
import { RescueManagementTableComponent } from './component/rescue-management-table/rescue-management-table.component';


@NgModule({
  declarations: [
    StockManagementComponent,
    RescueManagementComponent,
    RescueManagementTableComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    CardModule,
    AutoCompleteModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
    TableModule
  ]
})
export class ManagementModule { }
