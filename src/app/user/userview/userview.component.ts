import { Component, OnInit } from '@angular/core';


export interface Tile {
  
  cols: number;
  rows: number;
  text: string;
}



@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'NAME', cols: 1, rows: 1},
    {text: 'EMAIL', cols: 2, rows: 1},
    {text: 'DESIGNATION', cols: 1, rows: 1},
    {text: 'STATUS', cols: 1, rows: 1},
  ];

 

  constructor() { }

  ngOnInit() {
  }

}
