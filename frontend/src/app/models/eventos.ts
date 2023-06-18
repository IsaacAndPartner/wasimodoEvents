export class Evento {
    categoria: string;
    nombre: string;
    fecha: string;
    hora: string;
    lugar: string;
    descripcion: string;
    imagen: string;
    estado: boolean;

    constructor(
      categoria: string,
      nombre: string,
      fecha: string,
      hora: string,
      lugar: string,
      descripcion: string,
      imagen: string,
      estado: boolean
    ) {
      this.categoria = categoria;
      this.nombre = nombre;
      this.fecha = fecha;
      this.hora = hora;
      this.lugar = lugar;
      this.descripcion = descripcion;
      this.imagen = imagen;
      this.estado = estado;
    }
  }
