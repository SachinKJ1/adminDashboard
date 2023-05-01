import { Component } from '@angular/core';
import { UiService } from 'src/app/UI-services/ui.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent {
  constructor(private uiServices: UiService) {}

  onBgColorChanges() {
    if (this.uiServices.bgColor === 'dark') {
      return 'background-black';
    }
    return 'background-white';
  }
  onTextColorChange() {
    if (this.uiServices.bgColor === 'dark') {
      return 'textColor-white';
    }
    return 'textColor-black';
  }
}
