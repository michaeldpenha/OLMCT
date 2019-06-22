import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnouncementsRoutingModule } from './announcements-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { AnnouncementsComponent } from './components/announcements/announcements.component';

@NgModule({
  declarations: [AnnouncementsComponent],
  imports: [
    CommonModule,
    AnnouncementsRoutingModule,
    SharedModule
  ]
})
export class AnnouncementsModule { }
