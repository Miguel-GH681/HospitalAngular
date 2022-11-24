import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { ContainerComponent } from './components/container/container.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    TitleComponent,
    ContainerComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    ContainerComponent,
    TableComponent
  ]
})
export class SharedModule { }
