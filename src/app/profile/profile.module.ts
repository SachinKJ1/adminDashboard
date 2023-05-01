import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { AccoutComponent } from './accout/accout.component';
import { MatIconModule } from '@angular/material/icon';
import { PlatformSettingsComponent } from './platform-settings/platform-settings.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    ProfileHomeComponent,
    AccoutComponent,
    PlatformSettingsComponent,
    ProfileInformationComponent,
    ConversationsComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatIconModule,
    MatSlideToggleModule,
  ],
})
export class ProfileModule {}
