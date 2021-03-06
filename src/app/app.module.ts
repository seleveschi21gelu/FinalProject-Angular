import { DeliveryTypeService } from './delivery-type.service';
import { FlatblockService } from './services/flatblock.service';
import { MaterialService } from './services/material.service';
import { ProviderService } from './services/provider.service';
import { StatusService } from './status.service';
import { AdminComponent } from './components/admin/admin.component';
import { BillsService } from './services/bills.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component'
import { formatCurrency } from '@angular/common';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BillsService, StatusService, ProviderService, MaterialService, FlatblockService, DeliveryTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
