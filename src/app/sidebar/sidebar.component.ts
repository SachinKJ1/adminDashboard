import { Component, EventEmitter, Output } from '@angular/core';
import { UiService } from '../UI-services/ui.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Output() toggleSidebar = new EventEmitter();
  @Output() sidebarSlider = new EventEmitter();
  black = '';
  text_color = '';
  btn_sidebar_color = '';
  constructor(private uiServices: UiService) {}
  SettingsToggle() {
    this.toggleSidebar.emit();
  }
  onSidebarBtnColorChange() {
    return this.uiServices.sidebarButtonColor;
  }
  onSidebarBgColorChange() {
    if (this.uiServices.sidebarBgColor === 'light') {
      this.black = 'dark';
      this.text_color = 'text_dark';

      return this.uiServices.sidebarBgColor;
    } else {
      this.text_color = 'text_light';
      return this.uiServices.sidebarBgColor;
    }
  }
  onSidebarBtnToggle() {
    this.sidebarSlider.emit();
  }
}
