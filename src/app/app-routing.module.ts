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


const routes: Routes = [
{
  path:'',
  component:HomeComponent
},
{
  path:'admin/view/:id',
  component: ViewRegistrationComponent
},
  {path:'admin',
component:AdminComponent
},
{
  path:'flatblock',
  component:FlatblockComponent
},
{
  path:'provider',
  component:ProviderComponent
},
{
  path:'material',
  component:MaterialComponent
},
{
  path:'admin/view-flatblock',
  component:ViewRegistrationFlatblockComponent
},
{
  path:'admin/view-provider',
  component:ViewProviderComponent
},
{
  path:'admin/view-material',
  component:ViewMaterialComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
