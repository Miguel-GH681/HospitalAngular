import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy(){
    console.log('Elemento Destruído');
    
  }
}
