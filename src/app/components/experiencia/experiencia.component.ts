import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '../../model/headers.model';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService} from 'src/app/service/educacion.service';
import { HeadersService} from 'src/app/service/headers.service';

import { TokenService } from 'src/app/service/token.service';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  public experiencias: any;
  public header: Headers[];

  closeResult: string;
  editForm: FormGroup;

  public roles: string[];
  public isAdmin = false;

  
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private experienciaService: EducacionService,
    private router: Router,
    private tokenService: TokenService,
    private headersService: HeadersService
    ) {
      // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
     }

  ngOnInit(): void {
    this.getFilteredHeaders()
    this.getExperiencia();
    
    this.editForm = this.fb.group({
      id: [''],
      tipo: [''],
      contenido: [''],
    });

    this.roles= this.tokenService.getAuthorities();
    this.roles.forEach( rol => {
      if(rol === 'ROLE_ADMIN'){
        this.isAdmin= true;
      }
    })
  }

  public getFilteredHeaders() {
    this.headersService.getHeaders().pipe(
      map(data => 
        data.filter(exp => exp.tipo === 'experiencia')
      )
    ).subscribe(data=> {
      this.header = data;
      console.log(data)
    });
  }

  public getExperiencia(){
    this.experienciaService.getEducacion().subscribe(data => {
      this.experiencias = data;
    });
  }

  public crearExp(){
    this.router.navigate(["crearExp"]);
  }

  public editarExp(experiencia: Educacion){
    localStorage.setItem("id",experiencia.id.toString());
    this.router.navigate(["editarExp"]);
  }

  public eliminarExp(experiencia: Educacion) {
    this.experienciaService.deleteEducacion(experiencia).subscribe(data => {
      console.log(data);
      this.experiencias = this.experiencias.filter((p: Educacion) =>{
        p !== experiencia;
        console.log(p);
      });
      alert("Experiencia eliminada Correctamente!");
      this.ngOnInit();
    });
  }
 
  cearHeader(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  editarHeader(targetModal, header:Headers) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue( {
      id: header.id,
      tipo: header.tipo,
      contenido: header.contenido,
    });
   }

   public eliminarHeader(headers: Headers) {
    this.headersService.deleteHeaders(headers).subscribe(data => {
      console.log(data);
      this.header = this.header.filter((p: Headers) =>{
        p !== headers;
        console.log(p);
      });
      alert("Header Eliminado Correctamente!");
      this.ngOnInit();
    });
   }
  
  onSubmit(f: NgForm) {
    console.log(f.form.value);

    this.headersService.createHeaders( f.value)
      .subscribe((result) => {
        this.ngOnInit(); // reload the table
      });
    this.modalService.dismissAll(); // dismiss the modal
  }

  actualizarHeader() {
    this.headersService.updateHeaders(this.editForm.value)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
        console.log(results)
      });
  }

  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

