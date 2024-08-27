import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  standalone: true,
  imports: [],
  templateUrl: './convertidor.component.html',
  styleUrl: './convertidor.component.css'
})
export class ConvertidorComponent {
cantidadIngresada: number = 0;
cantidadObtenida:  number = 0;
moneda1:  number = 0;
moneda2:  number = 0;

listaModena: string[] = [
  'EUR',
  'USD',
  'LIBRA'
]

}
