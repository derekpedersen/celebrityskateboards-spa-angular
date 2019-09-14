import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { StatesModule } from './states/states.module';
import { CitiesModule } from './cities/cities.module';
import { HomepageComponent } from './homepage/homepage.component';
import { SkateparkModule } from './skatepark/skatepark.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    SharedModule,
    SkateparkModule,
    CitiesModule,
    StatesModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
