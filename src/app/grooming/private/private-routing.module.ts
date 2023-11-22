import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [
    {
      path: '',
      component: PrivateComponent,
      children: [
        {
          path: 'reservations',
          loadChildren: () =>
            import('./reservations/reservations.module').then(
              (m) => m.ReservationsModule
            ),
        },
        {
          path: '',
          redirectTo: 'reservations',
          pathMatch: 'full',
        },
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class PrivateRoutingModule {}
  