import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Evento } from 'src/app/models/eventos';
import { EventosService } from 'src/app/services/eventos.service';



@Component({
  selector: 'app-registroevents',
  templateUrl: './registroevents.component.html',
  styleUrls: ['./registroevents.component.css']
})
export class RegistroeventsComponent {
    eventoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private _eventoService: EventosService) { }

  ngOnInit() {
    this.eventoForm = this.formBuilder.group({
      categoria: ['', Validators.required],
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      lugar: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: ['', Validators.required],
      estado:[true]
    });
  }

  crearEvento() {
      const eventoData: Evento = {
        categoria: this.eventoForm.value.categoria,
        nombre: this.eventoForm.value.nombre,
        fecha: this.eventoForm.value.fecha,
        hora: this.eventoForm.value.hora,
        lugar: this.eventoForm.value.lugar,
        descripcion: this.eventoForm.value.descripcion,
        imagen: this.eventoForm.value.imagen,
        estado: this.eventoForm.value.estado
      };

      this._eventoService.crearEvento(eventoData).subscribe(
        response => {
          console.log('Evento creado exitosamente', response);
          alert("creadoooo")
        },
        error => {
          console.error('Error al crear el evento', error);
          alert("no funcionaaa")
        }
      );
  }
}
