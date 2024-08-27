import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Tarea } from '../../models/Tarea';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  listTareas: Tarea[] =  []
  nombreTarea = '';

  agregarTarea(){

    console.log(this.nombreTarea)
    //Crear un objeto tarea

    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    //Agregar el objeto tarea al array
    this.listTareas.push(tarea);

    //Reset Input
    this.nombreTarea = '';
  }
}
