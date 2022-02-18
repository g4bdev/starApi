import { Component, OnInit } from '@angular/core';
import { PeopleApiService } from '../service/people-api.service';

@Component({
  selector: 'app-star-char',
  templateUrl: './star-char.component.html',
  styleUrls: ['./star-char.component.scss']
})
export class StarCharComponent implements OnInit {

  public getAllPeople: any;

  constructor(private peopleApiService : PeopleApiService) { }

  ngOnInit(): void {
    this.peopleApiService.apiListPeople.subscribe(
      res => {
        this.getAllPeople = res.results;
        console.log(this.getAllPeople)}
    );
  }

}
