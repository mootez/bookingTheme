import { Component, OnInit } from '@angular/core';
//import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-visiter',
  templateUrl: './visiter.component.html',
  styleUrls: ['./visiter.component.css']
})
export class VisiterComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
