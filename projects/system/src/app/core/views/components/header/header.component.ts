import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'amb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() showSideBar : EventEmitter<boolean> = new EventEmitter<boolean>();
  name : string = 'Alvaro González';

  constructor() { }

  ngOnInit(): void {
  }

  onShowSideBar(){
    this.showSideBar.emit(false);    
  }

}
