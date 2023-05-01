import { Component, EventEmitter, Output } from '@angular/core';
import { UiService } from '../UI-services/ui.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  @Output() toogleSettings = new EventEmitter();
  constructor(private uiseveices: UiService) {}
  onCloseSettings() {
    this.toogleSettings.emit();
  }
  onSidebar_Color_Btn(event: any) {
    this.uiseveices.sidebarButtonColor = event.target.dataset.tab
  }
  onSideNav_Colors_Click(event:any){
    this.uiseveices.sidebarBgColor = event.target.dataset.bg
    console.log(this.uiseveices.sidebarBgColor);
    
  }onBackgroudColorChange(event:any){
    this.uiseveices.bgColor = event.target.dataset.bg
  }
}
