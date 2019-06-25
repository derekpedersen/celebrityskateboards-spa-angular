import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';

import { ApiService } from './api/api.service';

import { MatButtonModule, MatCardModule, MatIconModule, MatExpansionModule, MatMenuModule, MatToolbarModule, MatProgressSpinnerModule, MatListModule, MatGridListModule, MatSidenavModule, MatProgressBarModule } from '@angular/material';
import { SkateparksModule } from './skateparks/skateparks.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCardModule, MatIconModule, MatExpansionModule, MatMenuModule, MatToolbarModule, MatProgressSpinnerModule, MatListModule, MatSidenavModule, MatProgressBarModule,
    SkateparksModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
