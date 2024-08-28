import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convertidor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './convertidor.component.html',
  styleUrl: './convertidor.component.css'
})
export class ConvertidorComponent {
cantidad = 0;
tengo = 'USD'
quiero = 'EURO'
total = 0;
monedas: string[] = [
  'EUR',
  'USD',
  'LIBRA'
]

}
