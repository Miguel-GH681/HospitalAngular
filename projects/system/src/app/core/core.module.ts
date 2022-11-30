import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './views/components/header/header.component';
import { SidebarComponent } from './views/components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './views/components/menu/menu.component';
import { PageLoginComponent } from './views/pages/page-login/page-login.component';
import { LoginComponent } from './views/components/login/login.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MenuComponent,
    PageLoginComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CoreModule { }
