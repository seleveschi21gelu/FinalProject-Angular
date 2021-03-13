import { NavbarComponent } from './navbar/navbar.component';
import { ViewMatertialByIdComponent } from './viewById/view-matertial-by-id/view-matertial-by-id.component';
import { ViewProviderByIdComponent } from './viewById/view-provider-by-id/view-provider-by-id.component';
import { ViewFlatblockByIdComponent } from './viewById/view-flatblock-by-id/view-flatblock-by-id.component';
import { ViewMaterialComponent } from './views/view-material/view-material.component';
import { ViewProviderComponent } from './views/view-provider/view-provider.component';
import { ViewRegistrationFlatblockComponent } from './views/view-registration-flatblock/view-registration-flatblock.component';
import { MaterialService } from './services/material.service';
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
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';


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
    path:'admin/view-provider',
    component:ViewProviderComponent,
    canActivate: [AuthService]
  },
  {
    path:'admin/view-material/:id',
    component:ViewMatertialByIdComponent,
    canActivate: [AuthService]
  },
  {
    path:'admin/view-material',
    component:ViewMaterialComponent,
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
