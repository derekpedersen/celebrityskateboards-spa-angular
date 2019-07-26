
//this is modelled from your app.module.ts and the components and 
//services are just arbitrary examples, your module might be different
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { SkateparksComponent } from './skateparks.component';
import { SkateparksService } from './skateparks.service';
import { Safe, SkateparkComponent } from '../skatepark/skatepark.component';
import { SkateparksRoutingModule } from './skateparks.routing';
import { SharedModule } from '../shared/shared.module';
import { StatesModule } from '../states/states.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StatesModule,
    SkateparksRoutingModule
  ],
  declarations: [
    SkateparkComponent,
    SkateparksComponent,
    Safe
  ],
  providers: [ 
      SkateparksService
   ]
})
export class SkateparksModule {}