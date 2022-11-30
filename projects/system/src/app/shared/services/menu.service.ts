import { Injectable } from '@angular/core';

export interface Menu {
  title: string;
  url: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menu : Menu[];

  constructor() { 
    this.menu = [
      {title: 'medic', url: '/medic', icon: '../assets/icons/medic.svg'},
      {title: 'driver', url: '/driver', icon: '../assets/icons/driver.svg'},
      {title: 'user', url: '/user', icon: '../assets/icons/user.svg'},
      {title: 'history', url: '/history', icon: '../assets/icons/history.svg'},
    ]
  }

  getItems(): Array<Menu>{
    return [...this.menu]
  }
}
