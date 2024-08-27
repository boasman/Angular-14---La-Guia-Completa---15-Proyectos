import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

 dadoIzquierda = 'img/dice1.png';
 dadoDerecha = 'img/dice2.png';

 numero1: number = 1;
 numero2: number = 0;

 tirarDado(): void{

  this.numero1 = Math.round(Math.random() * 5 ) + 1;
  this.numero2 = Math.round(Math.random() * 5 ) + 1;

  this.dadoIzquierda = 'img/dice' + this.numero1 + '.png'
   this.dadoDerecha = 'img/dice' + this.numero2 + '.png'

  console.log(this.numero1)
  console.log(this.numero2)
 }

}
