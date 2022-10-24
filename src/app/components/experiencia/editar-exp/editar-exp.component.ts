import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent implements OnInit {

  experiencia: any;

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.experienciaService.getExperienciaId(+id)
    .subscribe(data=>{
      this.experiencia=data;
    })

  }

  Actualizar(experiencia: Experiencia){
  this.experienciaService.updateExperiencia(experiencia).subscribe(data=>{
    this.experiencia = data;
    alert("Se Actualizo con exito!");
    this.router.navigate(['']);
  });


  }

}
