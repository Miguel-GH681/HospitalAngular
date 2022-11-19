import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from '../medic/views/pages/list-page/list-page.component';
import { FormComponent } from '../user/views/components/form/form.component';

const routes: Routes = [
  { path: 'list', component: ListPageComponent },
  { path: 'form', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
