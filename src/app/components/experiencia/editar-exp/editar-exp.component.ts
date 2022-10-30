import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent implements OnInit {

  experiencia: any;

  constructor(private experienciaService: EducacionService, private router: Router) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.experienciaService.getEducacionId(+id)
    .subscribe(data=>{
      this.experiencia=data;
    })

  }

  Actualizar(experiencia: Educacion){
  this.experienciaService.updateEducacion(experiencia).subscribe(data=>{
    this.experiencia = data;
    alert("Se Actualizo con exito!");
    this.router.navigate(['']);
  });


  }

}
