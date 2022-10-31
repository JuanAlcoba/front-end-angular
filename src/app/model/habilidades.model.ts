export class Habilidades {
    id?: number;
    tipo: String;
    titulo: String;
    porcentaje: number;
    logo: String;

    constructor(tipo: String, titulo: String, porcentaje: number, logo: String) {
        this.tipo = tipo;
        this.titulo = titulo;
        this.porcentaje = porcentaje;
        this.logo = logo;
    }
}
