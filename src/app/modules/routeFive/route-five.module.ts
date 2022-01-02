import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteFiveRoutingModule } from './route-five-routing.module';
import { RouteFiveComponent } from './route-five.component';
import { TableModule } from 'ngx-easy-table';


@NgModule({
  declarations: [RouteFiveComponent],
  imports: [
    CommonModule,
    RouteFiveRoutingModule,
    TableModule
  ]
})
export class RouteFiveModule { }
