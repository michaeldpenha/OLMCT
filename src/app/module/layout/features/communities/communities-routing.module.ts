import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommuntiesComponent } from './components/communties/communties.component';

const routes: Routes = [{
  path:'',
  component: CommuntiesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunitiesRoutingModule { }
