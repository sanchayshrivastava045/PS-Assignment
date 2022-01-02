import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteThreeRoutingModule } from './route-three-routing.module';
import { RouteThreeComponent } from './route-three.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentThreeComponent } from './component-three/component-three.component';
import { ComponentFourComponent } from './component-four/component-four.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RouteThreeComponent, ComponentOneComponent, ComponentTwoComponent, ComponentThreeComponent, ComponentFourComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouteThreeRoutingModule
  ]
})
export class RouteThreeModule { }
