import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatesRoutingModule } from './states.routing';
import { StatesComponent } from './states.component';
import { SharedModule } from '../shared/shared.module';
import { CitiesModule } from '../cities/cities.module';

@NgModule({
  declarations: [
    StatesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CitiesModule,
    StatesRoutingModule
  ],
  exports: [
    StatesComponent
  ]
})
export class StatesModule { }
