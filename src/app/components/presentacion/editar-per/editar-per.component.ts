import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editar-per',
  templateUrl: './editar-per.component.html',
  styleUrls: ['./editar-per.component.css']
})
export class EditarPerComponent implements OnInit {

  persona: Persona = new Persona("","", "", "", "", "");

  constructor(private datosPersona: PersonaService, private router: Router) { }

  ngOnInit(): void {
    this.Editar();
  }

  
  obtener(e:any){
    this.persona.img=e[0].base64;
  }

  obtener2(e:any){
    this.persona.banner=e[0].base64;
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.datosPersona.getPersonaId(+id)
    .subscribe(data=>{
      this.persona=data;
    })

  }

  Actualizar(persona: Persona){
    this.datosPersona.updatePersona(persona).subscribe(data=>{
      this.persona = data;
      alert("Se Actualizo con exito!");
      console.log(data);
      this.router.navigate(['']);
    });
}
}