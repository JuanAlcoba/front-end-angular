import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public educacion: any;
  public roles: string[];
  public isAdmin = false;

  
  constructor(
    private datosEducacion: EducacionService,
    private router: Router,
    private tokenService: TokenService,
    ) { }

  ngOnInit(): void {
    this.getEducacion();
    this.roles= this.tokenService.getAuthorities();
    this.roles.forEach( rol => {
      if(rol === 'ROLE_ADMIN'){
        this.isAdmin= true;
      }
    })
  }

  public getEducacion(){
    this.datosEducacion.getEducacion().subscribe(data => {
      console.log(data);
      this.educacion = data
    });
  }
  
  public Crear(){
    this.router.navigate(["crear"]);
  }

  public Editar(educacion: Educacion){
    localStorage.setItem("id",educacion.id.toString());
    this.router.navigate(["editar"]);
  }

  public EliminarEducacion(educacion: Educacion) {
    this.datosEducacion.deleteEducacion(educacion).subscribe(data => {
      console.log(data);
      this.educacion = this.educacion.filter((p: Educacion) =>{
        p !== educacion;
        console.log(p);
      });
      alert("Educacion eliminada Correctamente!");
      this.ngOnInit();
    });
  }

}
