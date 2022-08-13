import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectosList:any;
  constructor(private datosPortoflio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortoflio.obtenerDatos()
    .subscribe(data => 
      {
        console.log(data);
        this.proyectosList = data.proyectos;
      })
  
  }

}
