import { Component, OnInit } from '@angular/core';
import { FilmsApiService } from '../service/films-api.service';

@Component({
  selector: 'app-star-movie',
  templateUrl: './star-movie.component.html',
  styleUrls: ['./star-movie.component.scss']
})
export class StarMovieComponent implements OnInit {

  public getAllFilms: any;

  constructor(private filmsApiService : FilmsApiService) { }

  ngOnInit(): void {
    this.filmsApiService.apiListAllFilms.subscribe(
      res => {
        this.getAllFilms = res.results;
        console.log(this.getAllFilms)}
    );
  }

}
