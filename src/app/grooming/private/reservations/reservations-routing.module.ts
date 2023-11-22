import { RouterModule, Routes } from "@angular/router";
import { ReservationCreateComponent } from "./reservation-create/reservation-create.component";
import { ReservationDetailsComponent } from "./reservation-details/reservation-details.component";
import { ReservationListComponent } from "./reservation-list/reservation-list.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
      path: '',
      component: ReservationListComponent,
      children: [
        {
          path: 'list',
          component: ReservationListComponent,
        },
        {
          path: 'create',
          component: ReservationCreateComponent,
        },
        // {
        //   path: 'edit/reservation/:id',
        // },
        {
          path: 'reservation',
          component: ReservationDetailsComponent,
        },
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full',
        },
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ReservationsRoutingModule {}
  


























