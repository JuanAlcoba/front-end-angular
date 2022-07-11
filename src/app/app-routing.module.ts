import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrearComponent } from './components/educacion/crear/crear.component';
import { EditarComponent } from './components/educacion/editar/editar.component';

const routes: Routes = [
  {path:'', component:AppComponent},
  {path:'editar', component:EditarComponent},
  {path:'crear', component:CrearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
