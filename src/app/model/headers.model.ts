export class Headers {
    id?: number;
    tipo: String;
    contenido: String;

    constructor(tipo: String, contenido: String) {
        this.tipo = tipo;
        this.contenido = contenido;
    }
}
