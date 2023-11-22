import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { GroomingRoutingModule } from './grooming-routing.module';
import { SharedGroomingModule } from './shared/shared.module';



@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GroomingRoutingModule,
    SharedGroomingModule,
  ]
})
export class GroomingModule { }
