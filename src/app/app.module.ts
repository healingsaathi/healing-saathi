import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ManagementModule } from './management/management.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagementApiService } from './management/services/management-api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ManagementModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [ManagementApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
