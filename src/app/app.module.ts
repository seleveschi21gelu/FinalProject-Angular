import { ConstructiontypeService } from './services/constructiontype.service';
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
import { FlatblockComponent } from './components/flatblock/flatblock.component';
import { ProviderComponent } from './components/provider/provider.component';
import { MaterialComponent } from './components/material/material.component';
import { ViewRegistrationFlatblockComponent } from './views/view-registration-flatblock/view-registration-flatblock.component';
import { ViewProviderComponent } from './views/view-provider/view-provider.component';
import { ViewMaterialComponent } from './views/view-material/view-material.component';
import { ViewFlatblockByIdComponent } from './viewById/view-flatblock-by-id/view-flatblock-by-id.component';
import { ViewProviderByIdComponent } from './viewById/view-provider-by-id/view-provider-by-id.component';
import { ViewMatertialByIdComponent } from './viewById/view-matertial-by-id/view-matertial-by-id.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent,
    FlatblockComponent,
    ProviderComponent,
    MaterialComponent,
    ViewRegistrationFlatblockComponent,
    ViewProviderComponent,
    ViewMaterialComponent,
    ViewFlatblockByIdComponent,
    ViewProviderByIdComponent,
    ViewMatertialByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BillsService, StatusService, ProviderService, MaterialService, FlatblockService, DeliveryTypeService,ConstructiontypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
