import { Component } from '@angular/core';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSideBar : boolean = true;

  sideBar(e : any){
    this.showSideBar = !this.showSideBar;
  }
}
