import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLogged=false; 
  persona: any;

  constructor(private tokenService: TokenService, private router: Router, private personaService: PersonaService) { }

  ngOnInit(): void {
    this.getPersona();
    if(this.tokenService.getToken()){
      this.isLogged =  true; 
    } else {
      this.isLogged=false;
    }
    
  }

  public getPersona(){
    this.personaService.getPersona().subscribe(data => {
      // console.log(data);
      this.persona = data
    });
  }

  onLogOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['/']);
    // window.location.reload();
  }

}
