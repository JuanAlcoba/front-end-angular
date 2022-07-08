import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  educacion: Educacion = new Educacion("","","","");

  constructor(private datosEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.datosEducacion.getEducacionId(+id)
    .subscribe(data=>{
      this.educacion=data;
    })

  }

  Actualizar(educacion: Educacion){
  this.datosEducacion.updateEducacion(educacion).subscribe(data=>{
    this.educacion = data;
    alert("Se Actualizo con exito!");
    this.router.navigate(['']);
  });


  }

}
