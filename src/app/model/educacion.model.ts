export class Educacion {
    id?: number;
    tipo: String;
    titulo: String;
    ente: String;
    fechaIni: String;
    fechaFin: String;
    

    constructor(tipo: String, titulo: String, ente: String, fechaIni: String, fechaFin: String) {
        this.tipo = tipo;
        this.titulo = titulo;
        this.ente = ente;
        this.fechaIni = fechaIni;
        this.fechaFin = fechaFin;
        
    }
}
// este modelo será usado para los items iterables de la sección Experiencia y Educación (Cursos y certificaciones).