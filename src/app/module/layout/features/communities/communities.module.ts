import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../../../../shared/shared.module';
import { CommunitiesRoutingModule } from './communities-routing.module';
import { CommuntiesComponent } from './components/communties/communties.component';

@NgModule({
  declarations: [CommuntiesComponent],
  imports: [
    CommonModule,
    SharedModule,
    CommunitiesRoutingModule
  ]
})
export class CommunitiesModule { }
