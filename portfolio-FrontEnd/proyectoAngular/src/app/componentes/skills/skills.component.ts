import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillList:any;
  constructor(private datosPortoflio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortoflio.obtenerDatos()
    .subscribe(data => 
      {
        console.log(data);
        this.skillList = data.skills;
      })
  
  }

}
