import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-cita',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './crear-cita.component.html',
  styleUrl: './crear-cita.component.css'
})
export class CrearCitaComponent {

  nombre='';
  fecha='';
  hora='';
  sintomas='';

  formularioIncorrecto = false;

  agregarCita(){

    if(this.nombre === '' || this.fecha === '' || this.hora === '' || this.sintomas === ''){
      this.formularioIncorrecto = true;
      return;
    }    
    this.formularioIncorrecto = false;

    //Creamos objeto para enviarselo al padre
    const CITA = {
      nombre: this.nombre,     
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }

    console.log(CITA);
  }
}
