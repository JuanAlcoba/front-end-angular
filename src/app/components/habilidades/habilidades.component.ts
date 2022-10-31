import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Habilidades } from '../../model/habilidades.model';
import { Headers } from '../../model/headers.model';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { HeadersService } from 'src/app/service/headers.service';
import { TokenService } from 'src/app/service/token.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  public habilidades: any;
  public header: Headers[];

  closeResult: string;
  editForm: FormGroup;
  habilityForm: FormGroup;

  public roles: string[];
  public isAdmin = false;


  constructor( config: NgbModalConfig,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private habilidadesService: HabilidadesService,
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
    this.getHabilidades();
    
    this.editForm = this.fb.group({
      id: [''],
      tipo: [''],
      contenido: [''],
    });

    this.habilityForm = this.fb.group({
      id: [''],
      tipo: [''],
      titulo: [''],
      porcentaje: [''],
      logo: ['']
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
        data.filter(exp => exp.tipo === 'habilidades')
      )
    ).subscribe(data=> {
      this.header = data;
      console.log(data)
    });
  }

  public getHabilidades(){
    this.habilidadesService.getHabilidades().subscribe(data => {
      this.habilidades = data;
    });
  }

  public crearHab(hab){
    this.modalService.open(hab, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  public editarHab(targetModal, habilidad: Habilidades){
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue( {
      id: habilidad.id,
      tipo: habilidad.tipo,
      titulo: habilidad.titulo,
      porcentaje: habilidad.porcentaje,
      logo: habilidad.logo
    });
  }

  public eliminarHab(habilidad: Habilidades) {
    this.habilidadesService.deleteHabilidades(habilidad).subscribe(data => {
      console.log(data);
      this.habilidades = this.habilidades.filter((p: Habilidades) =>{
        p !== habilidad;
        console.log(p);
      });
      alert("Experiencia eliminada Correctamente!");
      this.ngOnInit();
    });
  }
 
  crearHeader(content) {
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

  actualizarHeader() {
    this.headersService.updateHeaders(this.editForm.value)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
        console.log(results)
      });
  }

  
  onSubmit(f: NgForm) {
    console.log(f.form.value);

    this.headersService.createHeaders(f.value)
      .subscribe((result) => {
        this.ngOnInit(); // reload the table
      });
    this.modalService.dismissAll(); // dismiss the modal
  }

  onSubmit2(f2: NgForm) {
    console.log(f2.form.value);

    this.habilidadesService.createHabilidades( f2.value)
      .subscribe((result) => {
        this.ngOnInit(); // reload the table
      });
    this.modalService.dismissAll(); // dismiss the modal
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
