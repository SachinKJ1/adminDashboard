import { Component } from '@angular/core';
import { UiService } from 'src/app/UI-services/ui.service';

@Component({
  selector: 'app-platform-settings',
  templateUrl: './platform-settings.component.html',
  styleUrls: ['./platform-settings.component.css']
})
export class PlatformSettingsComponent {
  constructor(private uiServices: UiService) {}
  onBgColorChange() {
    if (this.uiServices.bgColor === 'dark') {
      return 'text-light';
    }
    return 'text-dark';
  }
}
/* 
  constructor(private uiServices: UiService) {}

  onBgColorChange() {
    if (this.uiServices.bgColor === 'dark') {
      return 'background-black';
    }
    return 'background-white';
  } */