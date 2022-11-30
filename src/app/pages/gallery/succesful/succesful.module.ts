import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccesfulRoutingModule } from './succesful-routing.module';
import { SuccesfulComponent } from './succesful.component';


@NgModule({
  declarations: [
    SuccesfulComponent
  ],
  imports: [
    CommonModule,
    SuccesfulRoutingModule
  ]
})
export class SuccesfulModule { }
