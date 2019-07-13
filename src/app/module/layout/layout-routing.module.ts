import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [{
    path: '',
    loadChildren: './features/home/home.module#HomeModule'
  },{
    path: 'about-us',
    loadChildren: './features/aboutus/aboutus.module#AboutusModule'
  },{
    path: 'announcements',
    loadChildren: './features/announcements/announcements.module#AnnouncementsModule'
  },{
    path: 'contact-us',
    loadChildren: './features/contactus/contactus.module#ContactusModule'
  },{
    path: 'events',
    loadChildren: './features/events/events.module#EventsModule'
  },{
    path: 'communities',
    loadChildren: './features/communities/communities.module#CommunitiesModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
