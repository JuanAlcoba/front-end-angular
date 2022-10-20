export class NuevoUsuario {
    nombre: string;
    nombreUsuario: string;
    email: string;
    password: string;

    constructor(nombre: string, numbreUsuario: string, email: string, password: string) {
        this.nombre = nombre;
        this.email = email;
        this.nombreUsuario = numbreUsuario;
        this.password = password;
    }
}
