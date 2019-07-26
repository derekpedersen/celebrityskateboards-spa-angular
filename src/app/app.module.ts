import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';
import { SkateparksModule } from './skateparks/skateparks.module';
import { SharedModule } from './shared/shared.module';
import { StatesModule } from './states/states.module';
import { CitiesModule } from './cities/cities.module';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    SharedModule,
    CitiesModule,
    StatesModule,
    SkateparksModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
