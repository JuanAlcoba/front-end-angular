export class Educacion {
    id?: number;
    titulo: String;
    ente: String;
    fechaIni: String;
    fechaFin: String;
    

    constructor(titulo: String, ente: String, fechaIni: String, fechaFin: String) {
        this.titulo = titulo;
        this.ente = ente;
        this.fechaIni = fechaIni;
        this.fechaFin = fechaFin;
        
    }
}