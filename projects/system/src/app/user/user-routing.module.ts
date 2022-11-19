import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './views/components/form/form.component';
import { PageListComponent } from './views/pages/page-list/page-list.component';

const routes: Routes = [
  { path: 'list', component: PageListComponent },
  { path: 'form', component:  FormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
