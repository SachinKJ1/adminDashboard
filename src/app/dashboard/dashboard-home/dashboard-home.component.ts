import { Component } from '@angular/core';
import { UiService } from 'src/app/UI-services/ui.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css'],
})
export class DashboardHomeComponent {
  backGroundColor = '#ffff';
  textColor = '#000';
  constructor(private uiServices: UiService) {}
  onBgColorChange() {
    if (this.uiServices.bgColor === 'dark') {
      this.backGroundColor = '#000';
      this.textColor = '#ffff';
      return 'background-black';
    }
    this.backGroundColor = '#ffff';
    this.textColor = '#000';
    return 'background-white';
  }
}
