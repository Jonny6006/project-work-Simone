import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
import { BreweriesRoutingModule } from './breweries.routing';
import { DetailComponent } from './detail/detail.component';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [ListComponent,DetailComponent],
  imports: [
    CommonModule,SharedModule,BreweriesRoutingModule, TableModule,
    PaginatorModule
  ]
})
export class BreweriesModule {

 }
