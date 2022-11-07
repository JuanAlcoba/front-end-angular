import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  public persona:any;
  public roles: string[];
  public isAdmin = false;
  // persona: Persona = new Persona("","","","","","",);

  constructor(
    public personaService: PersonaService,
    private router: Router,
    private tokenService: TokenService,
    ) { }

  ngOnInit(): void {
    this.getPersona();
    this.roles= this.tokenService.getAuthorities();
    this.roles.forEach( rol => {
      if(rol === 'ROLE_ADMIN'){
        this.isAdmin= true;
      }
    })
  }


  public getPersona(){
    this.personaService.getPersona().subscribe(data => {
      // console.log(data);
      this.persona = data
    });
  }

  public Crear(){
    this.router.navigate(["crearPer"]);
  }

  public Editar(persona: Persona){
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["editarPer"]);
  }
}
