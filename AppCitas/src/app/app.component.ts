import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrearCitaComponent } from "./components/crear-cita/crear-cita.component";
import { ListCitasComponent } from "./components/list-citas/list-citas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CrearCitaComponent, ListCitasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "hola";
  listCita: any[] = [];


  agregarCita(cita:any){
    console.log('soy un padre');
    console.log(cita);
    this.listCita.push(cita);
    console.log(this.listCita)
  }

  eliminarCita(index:number){

    //para eliminar un elemento de la lista
    this.listCita.splice(index,1);
  }

}
