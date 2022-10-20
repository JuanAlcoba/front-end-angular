import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login.component';
import { RegistroComponent } from './components/auth/registro.component';
import { CrearComponent } from './components/educacion/crear/crear.component';
import { EditarComponent } from './components/educacion/editar/editar.component';
import { HomeComponent } from './components/home/home.component';
import { ProdGuardService as guard} from './components/guards/prod-guard.service';
import { CrearPerComponent } from './components/presentacion/crear-per/crear-per.component';
import { EditarPerComponent } from './components/presentacion/editar-per/editar-per.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'editar', component:EditarComponent, canActivate: [guard], data: {expectedRol: ['admin']}},
  {path:'crear', component:CrearComponent, canActivate: [guard], data: {expectedRol: ['admin']}},
  {path: 'crearPer', component:CrearPerComponent},
  {path: 'editarPer', component:EditarPerComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
