import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SkateparkComponent, Safe } from './skatepark.component';
import { SkateparkService } from './skatepark.service';
import { SkateparkRoutingModule } from './skatepark.routing';

@NgModule({
  declarations: [
      SkateparkComponent,
      Safe
  ],
  imports: [
    CommonModule,
    SharedModule,
    SkateparkRoutingModule
  ],
  exports: [
    SkateparkComponent
  ],
  providers: [
      SkateparkService
  ],
  bootstrap: []
})
export class SkateparkModule { }
