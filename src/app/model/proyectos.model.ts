export class Proyectos {
    id?: number;
    titulo: String;
    contenido: String;
    link: String;
    imagen: String;

    constructor(titulo: String, contenido: String, link: String, imagen: String) {
        this.titulo = titulo;
        this.contenido = contenido;
        this.link = link;
        this.imagen = imagen;
    }
}
