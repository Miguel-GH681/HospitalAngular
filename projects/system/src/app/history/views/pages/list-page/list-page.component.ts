import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amb-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  listHeaders = ['Id', 'Fecha', 'Descripción']

  constructor() { }

  ngOnInit(): void {
  }

}
