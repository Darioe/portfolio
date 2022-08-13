import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaLaboralList:any;
  constructor(private datosPortoflio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortoflio.obtenerDatos()
    .subscribe(data => 
      {
        console.log(data);
        this.experienciaLaboralList = data.experiencia;
      })
  
  }

}
