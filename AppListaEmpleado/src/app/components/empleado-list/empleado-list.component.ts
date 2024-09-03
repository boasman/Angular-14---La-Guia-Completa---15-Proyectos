import { Component, Output, output } from '@angular/core';
import { empleados } from '../../models/empleados';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountEmpleadosComponent } from "./count-empleados/count-empleados.component";

@Component({
  selector: 'app-empleado-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CountEmpleadosComponent],
  templateUrl: './empleado-list.component.html',
  styleUrl: './empleado-list.component.css'
})
export class EmpleadoListComponent {

  listEmpleado: empleados[] = [

    {legajo: 1, nombre:'Juan', apellido: 'Perez', sexo:'masculino', salario: 20000},
    {legajo: 2, nombre:'Maria', apellido: 'Dolores',sexo:'femenino', salario: 30000},
    {legajo: 3, nombre:'Pedro', apellido: 'Bautia',sexo:'masculino', salario: 35000},
    {legajo: 4, nombre:'Elvis', apellido: 'Boasman',sexo:'masculino', salario: 18000},
    {legajo: 5, nombre:'Rosmerys', apellido: 'De Leon',sexo:'femenino', salario: 25000},
    {legajo: 6, nombre:'Eurys', apellido: 'De Leon',sexo:'masculino', salario: 40000},
    {legajo: 7, nombre:'Roberta', apellido: 'Sanchez',sexo:'femenino', salario: 38000}
  ]

  radioButtonSeleccionado = 'todos';


  constructor(){
    
  }

  getFemenino(): number{    
    return this.listEmpleado.filter(empleado => empleado.sexo === 'femenino').length;    
  } 

  getTodos(): number{
    return this.listEmpleado.length;
  }
  
  getMasculino(): number{
    return this.listEmpleado.filter(empleado => empleado.sexo === 'masculino').length;  
  }

  empleadoCountRadioButtonChange(radiobuttonSelect:string):void{
    this.radioButtonSeleccionado = radiobuttonSelect;
  }
}
