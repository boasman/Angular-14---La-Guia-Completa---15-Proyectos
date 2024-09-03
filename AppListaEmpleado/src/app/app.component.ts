import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { CountEmpleadosComponent } from './components/empleado-list/count-empleados/count-empleados.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmpleadoListComponent,CountEmpleadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppListaEmpleado';
}
