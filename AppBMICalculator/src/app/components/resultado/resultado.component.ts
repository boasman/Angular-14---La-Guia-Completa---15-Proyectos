import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent {

  bmi: number;
  resultado: string;
  interpretacion:string;

  constructor(private route : ActivatedRoute){
    this.resultado = '',
    this.interpretacion = ''
    this.bmi = +route.snapshot.paramMap.get("value")!;
    console.log(this.bmi);
  }

  ngOnInit(){
    this.getResultado();
      
    
  }

  getResultado(){
    if(this.bmi >= 25){
      this.resultado = "Exceso de peso";
      this.interpretacion = "Tiene un peso corporal superior al normal. Intente hacer mas ejercicios";
    }
    else if(this.bmi >= 18.5){
      this.resultado = "Normal";
      this.interpretacion = "Tiene un peso corporal normal. !Buen Trabajo!";

    }
    else {
      this.resultado = "Bajo peso";
      this.interpretacion = "Tienes un peso corporal mas bajo de lo normal, Puedes comer un poco mas";
    }
  }

}
