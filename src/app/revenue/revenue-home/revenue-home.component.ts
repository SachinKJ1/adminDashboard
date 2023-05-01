import { Component } from '@angular/core';
import { UiService } from 'src/app/UI-services/ui.service';

@Component({
  selector: 'app-revenue-home',
  templateUrl: './revenue-home.component.html',
  styleUrls: ['./revenue-home.component.css']
})
export class RevenueHomeComponent {
  constructor(private uiServices: UiService) {}
  onBgColorChange() {
    if (this.uiServices.bgColor === 'dark') {
      return 'background-black';
    }
    return 'background-white';
  }
}
