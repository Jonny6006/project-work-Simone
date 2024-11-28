import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { RandomComponent } from './componenti/random/random.component';
import { NavbarComponent } from './componenti/navbar/navbar.component';
import { CategorieComponent } from './componenti/categorie/categorie.component';
import { ChuckNorrisComponent } from './chuck-norris.component';
import { RouterModule } from '@angular/router';
import { ChuckNorrisRoutingModule} from './chuck-norris.routing.module';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from 'primeng/menu';

@NgModule({ declarations: [
        ChuckNorrisComponent,
        RandomComponent,
        NavbarComponent,
        CategorieComponent
    ],
    bootstrap: [ChuckNorrisComponent], imports: [CommonModule,
        ChuckNorrisRoutingModule,
        ToastModule,
        RouterModule,
        DialogModule,
        CarouselModule,
        CardModule,
        ButtonModule,
        SharedModule,
        MenuModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class ChuckNorrisModule { }
