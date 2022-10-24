import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PortfolioService } from './portfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CrearComponent } from './components/educacion/crear/crear.component';
import { EditarComponent } from './components/educacion/editar/editar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login.component';
import { RegistroComponent } from './components/auth/registro.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { interceptorProvider } from './components/interceptors/prod-interceptor.service';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { CrearPerComponent } from './components/presentacion/crear-per/crear-per.component';
import { EditarPerComponent } from './components/presentacion/editar-per/editar-per.component';
import { CrearExpComponent } from './components/experiencia/crear-exp/crear-exp.component';
import { EditarExpComponent } from './components/experiencia/editar-exp/editar-exp.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PresentacionComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    LoginComponent,
    CrearComponent,
    EditarComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    CrearPerComponent,
    EditarPerComponent,
    CrearExpComponent,
    EditarExpComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AlifeFileToBase64Module
    
  ],
  providers: [PortfolioService, interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
