import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConvertidorComponent } from "./components/convertidor/convertidor.component";
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConvertidorComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppConvertidorMoneda';
}
