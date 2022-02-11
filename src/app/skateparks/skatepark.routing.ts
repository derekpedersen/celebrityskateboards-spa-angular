import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkateparkComponent } from './skatepark.component';

const routes: Routes = [
  // TODO: need a list view of skateparks by name
  // { path: 'skateparks/:state/:city', component: SkateparkComponent },
  { path: 'skateparks/:state/:city/:skatepark', component: SkateparkComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkateparkRoutingModule { }
