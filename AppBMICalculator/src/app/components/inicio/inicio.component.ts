import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
edad = 25;
peso = 60;
altura = 170;
sexo = 'Masculino';

constructor(private router: Router){}

cambiarAltura(event: any){
  this.altura = event.target.value;
}
masculino(){
  this.sexo = 'Masculino';
}
femenino(){
  this.sexo = 'Femenino';
}

carcularBMI(){
  
  const BMI = this.peso / Math.pow(this.altura/100,2)
  console.log(BMI.toFixed(1));
  this.router.navigate(['/resultado', BMI.toFixed(1)])
}
}
