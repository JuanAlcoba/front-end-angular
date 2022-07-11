import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './components/educacion/crear/crear.component';
import { EditarComponent } from './components/educacion/editar/editar.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'editar', component:EditarComponent},
  {path:'crear', component:CrearComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
