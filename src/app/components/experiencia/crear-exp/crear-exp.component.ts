import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';
@Component({
  selector: 'app-crear-exp',
  templateUrl: './crear-exp.component.html',
  styleUrls: ['./crear-exp.component.css']
})
export class CrearExpComponent implements OnInit {

  public experienciaList: Experiencia = new Experiencia("","","","","");
  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  public GuardarExperiencia(experiencia:Experiencia){
    this.experienciaService.createExperiencia(experiencia)
    .subscribe(data=>{
      this.experienciaList = data;
      alert("Se Agrego con Exito...!!!");
      this.router.navigate([""]);
    })
  }

}

