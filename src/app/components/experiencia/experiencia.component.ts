import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  public experiencia: any;
  public roles: string[];
  public isAdmin = false;

  
  constructor(
    private experienciaService: EducacionService,
    private router: Router,
    private tokenService: TokenService,
    ) { }

  ngOnInit(): void {
    this.getExperiencia();
    this.roles= this.tokenService.getAuthorities();
    this.roles.forEach( rol => {
      if(rol === 'ROLE_ADMIN'){
        this.isAdmin= true;
      }
    })
  }

  public getExperiencia(){
    this.experienciaService.getEducacion().subscribe(data => {
      console.log(data);
      this.experiencia = data
    });
  }
  
  public Crear(){
    this.router.navigate(["crearExp"]);
  }

  public Editar(experiencia: Educacion){
    localStorage.setItem("id",experiencia.id.toString());
    this.router.navigate(["editarExp"]);
  }

  public EliminarExperiencia(experiencia: Educacion) {
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

