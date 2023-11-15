import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './detail/detail.component';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { BreweriesRouter } from './breweries.routing';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [ListComponent,DetailComponent],
  imports: [
    CommonModule,SharedModule, TableModule,
    PaginatorModule,BreweriesRouter,CardModule
  ]
})
export class BreweriesModule {

 }
