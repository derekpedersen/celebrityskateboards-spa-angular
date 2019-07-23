
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkateparksComponent } from './skateparks.component';

const skateparkRoutes: Routes = [
  { path: 'skateparks',  component: SkateparksComponent }
];

//taken from angular.io
//Only call RouterModule.forRoot in the root AppRoutingModule (or the AppModule if 
//that's where you register top level application routes). In any other module, you 
//must call the RouterModule.forChild method to register additional routes.

@NgModule({
  imports: [
    RouterModule.forChild(skateparkRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SkateparksRoutingModule { }