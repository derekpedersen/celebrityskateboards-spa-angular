import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkateparksComponent } from './skateparks/skateparks.component'

const routes: Routes = [
    { path: '', component: SkateparksComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }