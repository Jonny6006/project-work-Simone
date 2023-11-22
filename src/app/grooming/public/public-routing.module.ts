import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
    {
      path:'',
      component: PublicComponent,
      children: [
        {
          path: 'home',
          loadChildren:() => import('./home/home.module').then(m => m.HomeModule),
        },
        {
          path: 'prenotazioni',
          loadChildren: () => import('./prenotazioni/prenotazioni.module').then(m => m.PrenotazioniModule),
        },
        {
          path: 'auth',
          loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
        },
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        }
      ]
    }
  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PublicRoutingModule { }
  