import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesRoutingModule } from './cities.routing';
import { CitiesComponent } from './cities.component';
import { SharedModule } from '../shared/shared.module';
import { CitiesSidenavComponent } from './cities-sidenav.component';
import { CityComponent } from './city.component';

@NgModule({
  declarations: [
    CitiesComponent,
    CityComponent,
    CitiesComponent,
    CitiesSidenavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CitiesRoutingModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    CitiesComponent,
    CityComponent,
    CitiesComponent,
    CitiesSidenavComponent
  ]
})
export class CitiesModule { }
