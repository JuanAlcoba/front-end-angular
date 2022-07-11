import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public educacionList: Educacion = new Educacion("","","","");
  constructor(private datosEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  public GuardarEducacion(educacion:Educacion){
    this.datosEducacion.createEducacion(educacion)
    .subscribe(data=>{
      this.educacionList = data;
      alert("Se Agrego con Exito...!!!");
      this.router.navigate([""]);
    })
  }

}
