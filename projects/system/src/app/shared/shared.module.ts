import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { ContainerComponent } from './components/container/container.component';
import { TableComponent } from './components/table/table.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar2';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar2';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar2';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    TitleComponent,
    ContainerComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports: [
    TitleComponent,
    ContainerComponent,
    TableComponent,
    PerfectScrollbarModule
  ]
})
export class SharedModule { }
