export class Persona {
    id?: number;
    nombre: String;
    apellido: String;
    titulo: String;
    banner: String;
    img: String;
    acerca: String;

    constructor(nombre: String, apellido: String, titulo: String, banner: String, img: String, acerca:String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.banner = banner;
        this.img = img;
        this.acerca = acerca;
    }
}