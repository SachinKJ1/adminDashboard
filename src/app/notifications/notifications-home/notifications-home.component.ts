import { Component } from '@angular/core';
import { UiService } from 'src/app/UI-services/ui.service';

@Component({
  selector: 'app-notifications-home',
  templateUrl: './notifications-home.component.html',
  styleUrls: ['./notifications-home.component.css']
})
export class NotificationsHomeComponent {
  constructor(private uiServices: UiService) {}
  onBgColorChange() {
    if (this.uiServices.bgColor === 'dark') {
      return 'background-black';
    }
    return 'background-white';
  }
}
