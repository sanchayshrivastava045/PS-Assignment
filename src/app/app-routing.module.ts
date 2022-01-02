import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'route-one',
    loadChildren: () => import('./modules/routeOne/route-one.module')
      .then(mod => mod.RouteOneModule)
  },
  {
    path: 'route-two',
    loadChildren: () => import('./modules/routeTwo/route-two.module')
      .then(mod => mod.RouteTwoModule)
  },
  {
    path: 'route-three',
    loadChildren: () => import('./modules/route-three/route-three.module')
      .then(mod => mod.RouteThreeModule)
  },
  {
    path: 'route-four',
    loadChildren: () => import('./modules/route-four/route-four.module')
      .then(mod => mod.RouteFourModule)
  },
  {
    path: 'route-five',
    loadChildren: () => import('./modules/routeFive/route-five.module')
      .then(mod => mod.RouteFiveModule)
  },
  {
    path: 'route-six',
    loadChildren: () => import('./modules/routeSix/route-six.module')
      .then(mod => mod.RouteSixModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }