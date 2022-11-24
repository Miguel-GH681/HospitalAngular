import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './views/components/form/form.component';
import { ListPageComponent } from './views/pages/list-page/list-page.component';

const routes: Routes = [
  { path: 'list', component: ListPageComponent },
  { path: 'form', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
