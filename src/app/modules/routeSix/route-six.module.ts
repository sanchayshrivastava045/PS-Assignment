import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteSixRoutingModule } from './route-six-routing.module';
import { RouteSixComponent } from './route-six.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [RouteSixComponent],
  imports: [
    CommonModule,
    RouteSixRoutingModule,
    InfiniteScrollModule
  ]
})
export class RouteSixModule { }
