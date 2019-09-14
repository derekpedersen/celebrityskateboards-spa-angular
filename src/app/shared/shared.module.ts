import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from '../api/api.service';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCardModule, 
    MatIconModule, 
    MatExpansionModule, 
    MatMenuModule, 
    MatToolbarModule, 
    MatProgressSpinnerModule, 
    MatListModule, 
    MatSidenavModule, 
    MatProgressBarModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [
  ],
  exports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCardModule, 
    MatIconModule, 
    MatExpansionModule, 
    MatMenuModule, 
    MatToolbarModule, 
    MatProgressSpinnerModule, 
    MatListModule, 
    MatSidenavModule, 
    MatProgressBarModule
  ]
})
export class SharedModule { }
