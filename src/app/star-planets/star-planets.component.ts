import { Component, OnInit } from '@angular/core';
import { PlanetsApiService } from '../service/planets-api.service';

@Component({
  selector: 'app-star-planets',
  templateUrl: './star-planets.component.html',
  styleUrls: ['./star-planets.component.scss']
})
export class StarPlanetsComponent implements OnInit {

  public getAllPlanets: any;

  constructor(private planetsApiService : PlanetsApiService) { }

  ngOnInit(): void {
    this.planetsApiService.apiListPlanets.subscribe(
      res => {
        this.getAllPlanets = res.results;
        console.log(this.getAllPlanets)}
    );
  }
}
