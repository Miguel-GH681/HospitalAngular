import { Component, Input, OnInit } from '@angular/core';

interface Medico {
  id:number,
  nombres:string,
  apellidos:string,
  especialidad:string
}

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() listHeaders!: string[];
  @Input() listData !: any;
  columns! : string[]
  constructor(){}

  ngOnInit(): void {
    this.columns = this.listHeaders.map(e => e.toLowerCase());   
  }
}
