import { Component, OnInit } from '@angular/core';
import { Menu, MenuService } from 'projects/system/src/app/shared/services/menu.service';

@Component({
  selector: 'amb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu : Menu[];
  router = [];
  constructor(private readonly menuService : MenuService) { 
    this.menu = menuService.getItems();
  }

  ngOnInit(): void {
  }

}
