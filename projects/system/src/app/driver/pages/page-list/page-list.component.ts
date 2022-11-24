import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  listHeaders : string[] = ['Id', 'Nombres', 'Apellidos', 'Licencia', 'Direccion']
  listData = [{id:'200201', nombres:'Juan Alberto', apellidos: 'Pérez Aguilar', licencia:'C', direccion:'Guatemala, Guatemala'},
  {id:'200202', nombres:'Esteban Alberto', apellidos: 'Rosales Mejía', licencia:'C', direccion:'Guatemala, Guatemala'},
  {id:'200203', nombres:'Juan Roberto', apellidos: 'González Fuentes', licencia:'B', direccion:'Guatemala, Guatemala'},
  {id:'200204', nombres:'Patricio Alán', apellidos: 'García Ramos', licencia:'B', direccion:'Guatemala, Guatemala'}]

  constructor() { }

  ngOnInit(): void {
  }

}
