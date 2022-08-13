import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionList:any;
  constructor(private datosPortoflio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortoflio.obtenerDatos()
    .subscribe(data => 
      {
        console.log(data);
        this.educacionList = data.educacion;
      })
  
  }

}
