import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public educacionList: any;
  
  constructor(private datosEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
    this.getEducacion();
  }

  public getEducacion(){
    this.datosEducacion.getEducacion().subscribe(data => {
      console.log(data);
      this.educacionList = data
    });
  }
  
  public Editar(educacion: Educacion){
    localStorage.setItem("id",educacion.id.toString());
    this.router.navigate(["editar"]);
  }

}
