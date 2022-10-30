import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';
@Component({
  selector: 'app-crear-exp',
  templateUrl: './crear-exp.component.html',
  styleUrls: ['./crear-exp.component.css']
})
export class CrearExpComponent implements OnInit {

  public experiencia: Educacion = new Educacion("","","","","");
  constructor(private experienciaService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  public GuardarExperiencia(experiencia:Educacion){
    this.experienciaService.createEducacion(experiencia)
    .subscribe(data=>{
      this.experiencia = data;
      alert("Se Agrego con Exito...!!!");
      this.router.navigate([""]);
    })
  }
}

