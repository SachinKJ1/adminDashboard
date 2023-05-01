import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsHomeComponent } from './notifications-home/notifications-home.component';
import { AlertsComponent } from './alerts/alerts.component';


@NgModule({
  declarations: [
    NotificationsHomeComponent,
    AlertsComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule { }
