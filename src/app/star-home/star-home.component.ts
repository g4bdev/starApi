import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-star-home',
  templateUrl: './star-home.component.html',
  styleUrls: ['./star-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StarHomeComponent implements OnInit {

  longText = `(Projeto idealizado durante minha participação no Ascan Academy, projeto idelizado pelo Instituo Atlantico.)`;

  constructor() { }

  ngOnInit(): void {
  }

}
