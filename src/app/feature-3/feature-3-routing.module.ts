import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Feature3Component } from './feature-3.component';
import { Feature3OneComponent } from './feature3-one/feature3-one.component';
import { Feature3TwoComponent } from './feature3-two/feature3-two.component';

const routes: Routes = [
  {
    path: '',
    component: Feature3Component,
  },
  {
    path: 'feature3one',
    component: Feature3OneComponent,
  },
  {
    path: 'feature3two',
    component: Feature3TwoComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feature3RoutingModule {}
