export class Experiencia {
    id?: number;
    header: String;
    titulo: String;
    ente: String;
    fechaIni: String;
    fechaFin: String;
    

    constructor(header:String,titulo: String, ente: String, fechaIni: String, fechaFin: String) {
        this.header = header;
        this.titulo = titulo;
        this.ente = ente;
        this.fechaIni = fechaIni;
        this.fechaFin = fechaFin;
        
    }
}