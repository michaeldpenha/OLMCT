import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactusComponent } from './components/contactus/contactus.component';
import { SharedModule } from '../../../../shared/shared.module';
import { environment } from '../../../../../environments/environment';

@NgModule({
  declarations: [ContactusComponent],
  imports: [
    CommonModule,
    ContactusRoutingModule,
    SharedModule,

    AgmCoreModule.forRoot({
      apiKey: environment.mapAPIKey
    })
  ]
})
export class ContactusModule { }
