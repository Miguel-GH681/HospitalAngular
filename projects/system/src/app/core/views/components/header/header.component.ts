import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'amb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  gitToken = "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";
  gitCommit = "proyecciones, lazy load, tables, title"
  @Output() showSideBar : EventEmitter<boolean> = new EventEmitter<boolean>();
  name : string = 'Alvaro González';

  constructor() { }

  ngOnInit(): void {
  }

  onShowSideBar(){
    this.showSideBar.emit(false);    
  }

}
