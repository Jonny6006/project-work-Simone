import { NgModule } from '@angular/core';
import { GroomingRoutingModule } from './grooming-routing.module';


import { SharedGroomingModule } from './shared/shared.module';
import { GroomingComponent } from './grooming.component';




@NgModule({
  declarations: [
    GroomingComponent
  ],
  imports: [
    GroomingRoutingModule,
    SharedGroomingModule
  ]
})
export class GroomingModule { }
