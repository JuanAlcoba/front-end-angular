import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Proyectos } from 'src/app/model/proyectos.model';
import { Headers } from '../../model/headers.model';
import { HeadersService } from 'src/app/service/headers.service';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public proyectos: any;
  public header: Headers[];

  closeResult: string;
  headForm: FormGroup;
  proyectForm: FormGroup;

  public roles: string[];
  public isAdmin = false;
  base64: String;


  constructor( config: NgbModalConfig,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private proyectosService: ProyectosService,
    private router: Router,
    private tokenService: TokenService,
    private headersService: HeadersService
    ) {
      // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
     }

    ngOnInit(): void {
      this.getFilteredHeaders();
      this.getProyectos();
      
      this.headForm = this.fb.group({
        id: [''],
        tipo: [''],
        contenido: [''],
    });
  
    this.proyectForm = this.fb.group({
      id: [''],
      titulo: [''],
      contenido: [''],
      link: [''],
      imagen: [''],
    }); 
  }

  public getFilteredHeaders() {
    this.headersService.getHeaders().pipe(
      map(data => 
        data.filter(exp => exp.tipo === 'proyectos')
      )
    ).subscribe(data=> {
      this.header = data;
      console.log(data)
    });
  }
  
  public getProyectos(){
    this.proyectosService.getProyectos().subscribe(data => {
      this.proyectos = data;
    });
  }

  public obtenerImg(e:any): void {     
    this.base64 = e[0].base64; 
    this.proyectForm.value.imagen=this.base64;  
  }

  public crearPro(pro){
    this.modalService.open(pro, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  public editarPro(targetModal, proyecto: Proyectos){
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.proyectForm.patchValue( {
      id: proyecto.id,
      titulo: proyecto.titulo,
      contenido: proyecto.contenido,
      link: proyecto.link,
      imagen: proyecto.imagen
    });
  }

  public eliminarPro(proyecto: Proyectos) {
    this.proyectosService.deleteProyectos(proyecto).subscribe(data => {
      console.log(data);
      this.proyectos = this.proyectos.filter((p: Proyectos) =>{
        p !== proyecto;
        console.log(p);
      });
      alert("Proyecto eliminado Correctamente!");
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
    this.headForm.patchValue( {
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
    this.headersService.updateHeaders(this.headForm.value)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
        console.log(results)
      });
  }

  actualizarProyecto() {
    this.proyectosService.updateProyectos(this.proyectForm.value)
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
    f2.form.value.imagen=this.base64;;
    console.log(f2.form.value);
    this.proyectosService.createProyectos(f2.value)
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
