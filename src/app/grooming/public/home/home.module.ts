import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MarketingComponent } from './marketing/marketing.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedGroomingModule } from '../../shared/shared.module';





@NgModule({
  declarations: [HomeComponent,MarketingComponent,LandingPageComponent],
  imports: [
    CommonModule,HomeRoutingModule,SharedGroomingModule
  ]
})
export class HomeModule { }
