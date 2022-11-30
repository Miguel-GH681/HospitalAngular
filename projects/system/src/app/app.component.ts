import { Component } from '@angular/core';
import { ILayout } from './config/injections/layout/interfaces/layout.interface';
import { LayoutService } from './config/injections/layout/services/layout.service';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSideBar : boolean = true;
  layoutOptions! : ILayout
  sideBar(e : any){
    this.showSideBar = !this.showSideBar;
  }

  constructor(private readonly layoutService : LayoutService){
    this.layoutService.Configuration.subscribe((config:ILayout)=>{
      this.layoutOptions = config;
    })
  }
}
