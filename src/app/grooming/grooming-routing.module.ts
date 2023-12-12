import { NgModule } from '@angular/core';
import { authGuard } from './services/guard/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { GroomingComponent } from './grooming.component';

const groomingroutes: Routes = [
    {
      path: '',
      component : GroomingComponent,
      children: [
        {
          path: 'private',
          loadChildren: () =>
            import('./private/private.module').then((m) => m.PrivateModule),
          canActivate: [authGuard],
        },
        {
          path: 'public',
          loadChildren: () =>
            import('./public/public.module').then((m) => m.PublicModule),
        },
        {
          path: '',
          redirectTo: 'public',
          pathMatch: 'full',
        },
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(groomingroutes)],
    exports: [RouterModule],
  })
  export class GroomingRoutingModule {}
  