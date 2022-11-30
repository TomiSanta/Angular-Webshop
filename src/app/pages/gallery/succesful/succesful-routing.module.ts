import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccesfulComponent } from './succesful.component';

const routes: Routes = [{ path: ':userId', component: SuccesfulComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuccesfulRoutingModule { }
