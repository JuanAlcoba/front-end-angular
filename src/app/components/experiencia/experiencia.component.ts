import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';
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
    private experienciaService: ExperienciaService,
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
    this.experienciaService.getExperiencia().subscribe(data => {
      console.log(data);
      this.experiencia = data
    });
  }
  
  public Crear(){
    this.router.navigate(["crearExp"]);
  }

  public Editar(experiencia: Experiencia){
    localStorage.setItem("id",experiencia.id.toString());
    this.router.navigate(["editarExp"]);
  }

  public EliminarExperiencia(experiencia: Experiencia) {
    this.experienciaService.deleteExperiencia(experiencia).subscribe(data => {
      console.log(data);
      this.experiencia = this.experiencia.filter((p: Experiencia) =>{
        p !== experiencia;
        console.log(p);
      });
      alert("Experiencia eliminada Correctamente!");
      this.ngOnInit();
    });
  }

}

