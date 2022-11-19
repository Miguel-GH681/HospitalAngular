import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicRoutingModule } from './medic-routing.module';
import { FomrComponent } from './views/components/fomr/fomr.component';
import { ListPageComponent } from './views/pages/list-page/list-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FomrComponent,
    ListPageComponent
  ],
  imports: [
    CommonModule,
    MedicRoutingModule,
    SharedModule
  ]
})
export class MedicModule { }
