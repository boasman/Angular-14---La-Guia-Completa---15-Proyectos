import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = "Hola Mundo";
  texto = 'Esto es un video sobre event binding';
  // nombre = 'Elvis';
  // textoPlaceHolder = 'Escriba algo aqui';
  // deshabilitado = true;
  // imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png';

  // constructor(){
  //   setInterval(() => this.deshabilitado = false, 3000);
  // }

  // getSuma(numero1: number,  numero2: number){
  //   return numero1 + numero2;
  // }

  cambiarTexto(): void{
    this.texto = 'En el proximo video vamos a ver Two way data-binding';
  }
}
