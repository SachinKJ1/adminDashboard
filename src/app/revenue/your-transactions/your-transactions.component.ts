import { Component } from '@angular/core';
import { UiService } from 'src/app/UI-services/ui.service';

@Component({
  selector: 'app-your-transactions',
  templateUrl: './your-transactions.component.html',
  styleUrls: ['./your-transactions.component.css']
})
export class YourTransactionsComponent {
  constructor(private uiServices: UiService) {}

  onBgColorChange() {
    if (this.uiServices.bgColor === 'dark') {
      return 'background-black';
    }
    return 'background-white';
  }
}
