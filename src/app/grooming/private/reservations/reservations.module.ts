import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationCreateComponent } from './reservation-create/reservation-create.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsComponent } from './reservations.component';
import { SharedGroomingModule } from '../../shared/shared.module';




@NgModule({
  declarations: [
    ReservationCreateComponent,
    ReservationDetailsComponent,
    ReservationListComponent,
    ReservationsComponent
  ],
  imports: [
    CommonModule,ReservationsRoutingModule,SharedGroomingModule
  ]
})
export class ReservationsModule { }
