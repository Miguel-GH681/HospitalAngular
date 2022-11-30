import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './config/injections/layout/modules/layout.module';
import { layoutConstant } from './config/injections/layout/constants/layout.constant';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    CoreModule,
    LayoutModule.forRoute(layoutConstant)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
