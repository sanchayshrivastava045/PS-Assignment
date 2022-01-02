import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteFourRoutingModule } from './route-four-routing.module';
import { RouteFourComponent } from './route-four.component';
import { TimeOneComponent } from './time-one/time-one.component';
import { TimeTwoComponent } from './time-two/time-two.component';
import { TimeThreeComponent } from './time-three/time-three.component';
import { TimeFourComponent } from './time-four/time-four.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RouteFourComponent, TimeOneComponent, TimeTwoComponent, TimeThreeComponent, TimeFourComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouteFourRoutingModule
  ]
})
export class RouteFourModule { }
