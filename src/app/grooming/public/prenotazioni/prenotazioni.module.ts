import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrenotazioniComponent } from './prenotazioni.component';
import { PrenotazioniRoutingModule } from './prenotazioni-routing.module';
import { SharedGroomingModule } from '../../shared/shared.module';





@NgModule({
  declarations: [PrenotazioniComponent],
  imports: [
    CommonModule,PrenotazioniRoutingModule,SharedGroomingModule
  ]
})
export class PrenotazioniModule { }
