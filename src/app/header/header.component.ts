import { Component, Output, EventEmitter, Input } from '@angular/core';
import { UiService } from '../UI-services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter();

  @Output() toggleSetting = new EventEmitter();

  @Input() toggleStatus = false;
  constructor(private uiServices: UiService) {}

  SidebarToggle() {
    this.toggleSidebar.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }

  SettingsToggle() {
    this.toggleSetting.emit();
  }
  onBgColorChange() {
    if (this.uiServices.bgColor === 'dark') {
      return 'background-black';
    }
    return 'background-white';
  }
}
