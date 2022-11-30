import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'projects/system/src/app/config/injections/layout/services/layout.service';

@Component({
  selector: 'amb-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  constructor(private readonly layoutService : LayoutService) {
    //this.layoutService.setConfiguration({hideHeader: true, hideMenu: true})
    this.layoutService.Configuration = {hideHeader: true, hideMenu: true}
    
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.layoutService.Configuration = {hideHeader: false, hideMenu: false}
  }
}
