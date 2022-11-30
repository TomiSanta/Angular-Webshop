import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from "./gallery.component";

const routes: Routes = [
  {path: '', component: GalleryComponent},
  { path: 'succesful', loadChildren: () => import('./succesful/succesful.module').then(m => m.SuccesfulModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
