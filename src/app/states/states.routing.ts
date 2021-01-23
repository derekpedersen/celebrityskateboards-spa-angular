import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatesComponent } from './states.component';

const routes: Routes = [
  // TODO: data for route
  { path: 'skateparks', component: StatesComponent },
  { path: 'skateparks/:state', component: StatesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatesRoutingModule { }
