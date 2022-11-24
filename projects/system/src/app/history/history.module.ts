import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './views/components/form/form.component';
import { ListPageComponent } from './views/pages/list-page/list-page.component';


@NgModule({
  declarations: [
    FormComponent,
    ListPageComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule
  ]
})
export class HistoryModule { }
