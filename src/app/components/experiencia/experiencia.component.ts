import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '../../model/headers.model';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';
import { HeadersService } from 'src/app/service/headers.service';

import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  public experiencia: any;
  public header: any;
  public roles: string[];
  public isAdmin = false;

  
  constructor(
    private experienciaService: EducacionService,
    private router: Router,
    private tokenService: TokenService,
    private headersService: HeadersService
    ) { }

  ngOnInit(): void {
    this.getHeaders();
    this.getExperiencia();
    this.roles= this.tokenService.getAuthorities();
    this.roles.forEach( rol => {
      if(rol === 'ROLE_ADMIN'){
        this.isAdmin= true;
      }
    })
  }

  public getHeaders(){
    this.headersService.getHeaders().subscribe(data=>{
      this.header = data;
    });
  }

  public getExperiencia(){
    this.experienciaService.getEducacion().subscribe(data => {
      this.experiencia = data;
    });
  }
  
  public crearHeader(){
    this.router.navigate(["crearHeader"]);
  }

  public editarHeader(header: Headers){
    localStorage.setItem("id",header.id.toString());
    this.router.navigate(["editarHeader"]);
  }

  public crearExp(){
    this.router.navigate(["crearExp"]);
  }

  public editarExp(experiencia: Educacion){
    localStorage.setItem("id",experiencia.id.toString());
    this.router.navigate(["editarExp"]);
  }

  public EliminarExp(experiencia: Educacion) {
    this.experienciaService.deleteEducacion(experiencia).subscribe(data => {
      console.log(data);
      this.experiencia = this.experiencia.filter((p: Educacion) =>{
        p !== experiencia;
        console.log(p);
      });
      alert("Experiencia eliminada Correctamente!");
      this.ngOnInit();
    });
  }

}

