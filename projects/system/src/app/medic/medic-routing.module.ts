import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FomrComponent } from './views/components/fomr/fomr.component';
import { ListPageComponent } from './views/pages/list-page/list-page.component';

const routes: Routes = [
  { path: 'list', component: ListPageComponent },
  { path: 'form', component: FomrComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicRoutingModule { }
