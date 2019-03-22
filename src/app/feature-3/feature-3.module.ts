import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Feature3RoutingModule } from './feature-3-routing.module';
import { Feature3Component } from './feature-3.component';
import { Feature3OneComponent } from './feature3-one/feature3-one.component';
import { Feature3TwoComponent } from './feature3-two/feature3-two.component';

@NgModule({
  imports: [CommonModule, Feature3RoutingModule],
  declarations: [Feature3Component, Feature3OneComponent, Feature3TwoComponent],
})
export class Feature3Module {}
