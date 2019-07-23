import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatesRoutingModule } from './states.routing';
import { StatesComponent } from './states.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    StatesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StatesRoutingModule
  ]
})
export class StatesModule { }
