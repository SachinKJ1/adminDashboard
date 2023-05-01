import { Component,ElementRef } from '@angular/core';
import { UiService } from 'src/app/UI-services/ui.service';

@Component({
  selector: 'app-accout',
  templateUrl: './accout.component.html',
  styleUrls: ['./accout.component.css']
})
export class AccoutComponent {
  constructor(private uiServices: UiService , private el : ElementRef) {}
  onBgColorChange() {
    if (this.uiServices.bgColor === 'dark') {
      console.log(this.el.nativeElement.offsetHeight);
      
      return 'background-black';
    }
    return 'background-white';
  }
  onResize() {
    this.uiServices.profileComponentHeight = this.el.nativeElement.offsetHeight
  }
}
