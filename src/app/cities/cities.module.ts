import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesRoutingModule } from './cities.routing';
import { CitiesComponent } from './cities.component';

@NgModule({
  declarations: [
    CitiesComponent
  ],
  imports: [
    CommonModule,
    CitiesRoutingModule
  ]
})
export class CitiesModule { }
