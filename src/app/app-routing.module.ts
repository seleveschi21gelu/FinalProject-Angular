import { ClientViewByIdComponent } from './viewById/client-view-by-id/client-view-by-id.component';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { ClientViewComponent } from './views/client-view/client-view.component';
import { ClientComponent } from './components/client/client.component';
import { ViewFiscalBillByIdComponent } from './viewById/view-fiscal-bill-by-id/view-fiscal-bill-by-id.component';
import { UpdateComponent } from './components/update/update.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewMatertialByIdComponent } from './viewById/view-matertial-by-id/view-matertial-by-id.component';
import { ViewProviderByIdComponent } from './viewById/view-provider-by-id/view-provider-by-id.component';
import { ViewFlatblockByIdComponent } from './viewById/view-flatblock-by-id/view-flatblock-by-id.component';
import { ViewMaterialComponent } from './views/view-material/view-material.component';
import { ViewProviderComponent } from './views/view-provider/view-provider.component';
import { ViewRegistrationFlatblockComponent } from './views/view-registration-flatblock/view-registration-flatblock.component';
import { ProviderComponent } from './components/provider/provider.component';
import { FlatblockComponent } from './components/flatblock/flatblock.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponent } from './components/material/material.component';
import { LoginComponent } from './components/login/login.component';
import { PageerrorComponent } from './components/pageerror/pageerror.component';
import { FormsModule } from '@angular/forms';
import { FiscalBillComponent } from './components/fiscal-bill/fiscal-bill.component';
import { FiscalBillViewComponent } from './views/fiscal-bill-view/fiscal-bill-view.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
    canActivate: [AuthService]
  },
  {
    path:'admin/view/:id',
    component: ViewRegistrationComponent,
    canActivate: [AuthService]
  },
  {
    path:'flatblock',
    component:FlatblockComponent,
    canActivate: [AuthService]
  },
  {
    path:'provider',
    component:ProviderComponent,
    canActivate: [AuthService]
  },
  {
    path:'material',
    component:MaterialComponent,
    canActivate: [AuthService]
  },
  {
    path:'update',
    component: UpdateComponent,
    canActivate:[AuthService]
  },
  {path:'admin/clientView/:id',
  component:ClientViewByIdComponent,
  canActivate:[AuthService]
},
  {path:'registerPage',
  component:RegisterPageComponent,
  canActivate:[AuthService]
},
  {
    path:'admin/view-flatblock/:id',
    component:ViewFlatblockByIdComponent,
    canActivate: [AuthService]
  },
  {
    path:'admin/view-flatblock',
    component:ViewRegistrationFlatblockComponent,
    canActivate: [AuthService]
  },
  {
    path:'admin/view-provider/:id',
    component:ViewProviderByIdComponent,
    canActivate: [AuthService]
  },
  
  {
    path:'fiscalbill',
    component:FiscalBillComponent,
    canActivate: [AuthService]
  },
  {
    path:'fiscalbill/view',
    component:FiscalBillViewComponent,
    canActivate: [AuthService]
  },
  {
    path:'admin/view-material/:id',
    component:ViewMatertialByIdComponent,
    canActivate: [AuthService]
  },
  {
    path:'fiscalbill/view/:id',
    component:ViewFiscalBillByIdComponent,
    canActivate: [AuthService]
  },
  {
    path:'admin/view-provider',
    component:ViewProviderComponent,
    canActivate: [AuthService]
  },
  
  {
    path:'admin/view-material',
    component:ViewMaterialComponent,
    canActivate: [AuthService]
  },
  {
  path:'client',
  component:ClientComponent,
  canActivate: [AuthService]
  },
  {
    path:'admin/clientView',
    component:ClientViewComponent,
    canActivate: [AuthService]

  },
  {path:'admin',
    component: AdminComponent,
    canActivate: [AuthService]
  },
  {
    path:'',
    component:LoginComponent,
    canActivate: [AuthService]
  },
  {
    path:'**',
    component:PageerrorComponent,
    canActivate: [AuthService]
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
