import { ClientService } from './services/client.service';
import { FiscalBillService } from './services/fiscal-bill.service';
import { ConstructiontypeService } from './services/constructiontype.service';
import { DeliveryTypeService } from './services/delivery-type.service';
import { FlatblockService } from './services/flatblock.service';
import { MaterialService } from './services/material.service';
import { ProviderService } from './services/provider.service';
import { AdminComponent } from './components/bills-view/admin.component';
import { BillsService } from './services/bills.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/bills-register/home.component'
import { formatCurrency } from '@angular/common';
import { ViewRegistrationComponent } from './components/view-invoicesByID/view-registration.component';
import { FlatblockComponent } from './components/flatblock/flatblock.component';
import { ProviderComponent } from './components/provider/provider.component';
import { MaterialComponent } from './components/material/material.component';
import { ViewRegistrationFlatblockComponent } from './views/view-registration-flatblock/view-registration-flatblock.component';
import { ViewProviderComponent } from './views/view-provider/view-provider.component';
import { ViewMaterialComponent } from './views/view-material/view-material.component';
import { ViewFlatblockByIdComponent } from './viewById/view-flatblock-by-id/view-flatblock-by-id.component';
import { ViewProviderByIdComponent } from './viewById/view-provider-by-id/view-provider-by-id.component';
import { ViewMatertialByIdComponent } from './viewById/view-matertial-by-id/view-matertial-by-id.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { PageerrorComponent } from './components/pageerror/pageerror.component';
import { UpdateComponent } from './components/update/update.component';
import { FiscalBillComponent } from './components/fiscal-bill/fiscal-bill.component';
import { FiscalBillViewComponent } from './views/fiscal-bill-view/fiscal-bill-view.component';
import { ViewFiscalBillByIdComponent } from './viewById/view-fiscal-bill-by-id/view-fiscal-bill-by-id.component';
import { ClientComponent } from './components/client/client.component';
import { ClientViewComponent } from './views/client-view/client-view.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { ClientViewByIdComponent } from './viewById/client-view-by-id/client-view-by-id.component';
import { StatusService } from './services/status.service';
import { DeliveryTypeViewComponent } from './components/delivery-type-view/delivery-type-view.component';
import { DeliveryTypeComponent } from './components/delivery-type/delivery-type.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SidebarModule} from "ng-sidebar";
import { PageEntryComponent } from './page-entry/page-entry.component';
import { ViewsPageComponent } from './views-page/views-page.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DeliveryTypeViewComponent,
    PageerrorComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent,
    DeliveryTypeComponent,
    FlatblockComponent,
    ProviderComponent,
    MaterialComponent,
    ViewRegistrationFlatblockComponent,
    ViewProviderComponent,
    ViewMaterialComponent,
    ViewFlatblockByIdComponent,
    ViewProviderByIdComponent,
    ViewMatertialByIdComponent,
    NavbarComponent,
    UpdateComponent,
    FiscalBillComponent,
    FiscalBillViewComponent,
    ViewFiscalBillByIdComponent,
    ClientComponent,
    ClientViewComponent,
    RegisterPageComponent,
    FirstPageComponent,
    ClientViewByIdComponent,
    DeliveryTypeComponent,
    DeliveryTypeViewComponent,
    PageEntryComponent,
    ViewsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    ReactiveFormsModule,
    FormsModule,

    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SidebarModule.forRoot()


  ],
  providers: [AuthService, BillsService, StatusService,
              {provide:HTTP_INTERCEPTORS,
                useClass:HttpInterceptorService,
                multi:true},
              ProviderService, MaterialService,
              FlatblockService, DeliveryTypeService,
              ConstructiontypeService,FiscalBillService,
              ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
