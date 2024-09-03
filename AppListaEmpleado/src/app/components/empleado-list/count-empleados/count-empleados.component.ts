import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-count-empleados',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './count-empleados.component.html',
  styleUrl: './count-empleados.component.css'
})
export class CountEmpleadosComponent {
  @Input() todos: number
  @Input() femenino: number
  @Input() masculino: number
  @Output() countRadioButtonChange = new EventEmitter<string>();


  radioButtonSeleccionado = 'todos';

  constructor(){

    this.todos = 0;
    this.femenino = 0;
    this.masculino = 0;

  }

  ngOninit(){
    
  }

  radioChange(): void{
    this.countRadioButtonChange.emit(this.radioButtonSeleccionado);
  }

}
