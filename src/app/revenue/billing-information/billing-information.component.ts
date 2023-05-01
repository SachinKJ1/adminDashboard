import { Component } from '@angular/core';
import { UiService } from 'src/app/UI-services/ui.service';

@Component({
  selector: 'app-billing-information',
  templateUrl: './billing-information.component.html',
  styleUrls: ['./billing-information.component.css'],
})
export class BillingInformationComponent {
  bgBillColor = 'background-bill-white';
  constructor(private uiServices: UiService) {}
  onBgColorChange() {
    if (this.uiServices.bgColor === 'dark') {
      this.bgBillColor = 'background-bill-black';
      return 'background-black';
    }
    this.bgBillColor = 'background-bill-white';
    return 'background-white';
  }
}
