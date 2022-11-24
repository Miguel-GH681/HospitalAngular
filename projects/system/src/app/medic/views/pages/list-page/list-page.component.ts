import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amb-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {


  title:string = '5';
  listHeaders : string[] = ['Id', 'Especialidad', 'Nombres', 'Apellidos'];
  listData = [{id: 1, nombres:'Alvaro Miguel', apellidos:'González Hic', especialidad:'Odontólogo'},
  {id: 2, nombres:'Ernesto David', apellidos:'Pérez Hernández', especialidad:'Oftalmólogo'},
  {id: 3, nombres:'Laura Isabel', apellidos:'González Hic', especialidad:'Médigo General'}]

  constructor() { }

  ngOnInit(): void {
  }
}
