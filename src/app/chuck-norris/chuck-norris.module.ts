import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { RandomComponent } from './componenti/random/random.component';
import { NavbarComponent } from './componenti/navbar/navbar.component';
import { CategorieComponent } from './componenti/categorie/categorie.component';
import { ChuckNorrisComponent } from './chuck-norris.component';
import { RouterModule } from '@angular/router';
import { chuckNorrisRoutingModule } from './chuck-norris.routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
   ChuckNorrisComponent,
    RandomComponent,
    NavbarComponent,
    CategorieComponent
  ],
  imports: [
    CommonModule,
    chuckNorrisRoutingModule,
    ToastModule,
    HttpClientModule,
    RouterModule
  ,
  ],
  providers: [],
  bootstrap: [ChuckNorrisComponent]
})
export class ChuckNorrisModule { }
