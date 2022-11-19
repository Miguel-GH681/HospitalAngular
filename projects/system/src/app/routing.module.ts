import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

const routes : Routes = [
    { path: 'user', loadChildren: ()=> import('./user/user.module')
        .then(m => m.UserModule)
    },
    {
      path: 'medic', loadChildren: ()=> import('./medic/medic.module')
        .then(m => m.MedicModule)
    },
    {
      path: 'driver', loadChildren: ()=> import('./driver/driver.module')
        .then(m => m.DriverModule)
    },
    {
      path: 'history', loadChildren: ()=> import('./history/history.module')
        .then(m => m.HistoryModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule{}