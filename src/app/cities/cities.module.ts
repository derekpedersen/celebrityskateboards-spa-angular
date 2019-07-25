import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesRoutingModule } from './cities.routing';
import { CitiesComponent } from './cities.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CitiesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CitiesRoutingModule
  ]
})
export class CitiesModule { }
