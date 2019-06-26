import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from '../api/api.service';

import { MatButtonModule, MatCardModule, MatIconModule, MatExpansionModule, MatMenuModule, MatToolbarModule, MatProgressSpinnerModule, MatListModule, MatGridListModule, MatSidenavModule, MatProgressBarModule } from '@angular/material';

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
