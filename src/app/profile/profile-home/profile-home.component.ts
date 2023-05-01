import { Component, ElementRef } from '@angular/core';
import { UiService } from 'src/app/UI-services/ui.service';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css'],
})
export class ProfileHomeComponent {
  height = '';
  constructor(private uiServices: UiService, private el: ElementRef) {
    // this.el.nativeElement.children[0].style.height = '1500px'
  }
  onBgColorChange() {
    if (this.uiServices.bgColor === 'dark') {
      return 'background-black';
    }
    return 'background-white';
  }
  ngOnInit() {
     
  }

  ngDoCheck() {
    if (
      this.uiServices.profileComponentHeight > '3500' &&
      this.uiServices.profileComponentHeight < '4000'
    ) {
      this.el.nativeElement.children[0].style.height = `${
        this.uiServices.profileComponentHeight + 400
      }px`;
      return;
    }
    if (
      this.uiServices.profileComponentHeight > '2500' &&
      this.uiServices.profileComponentHeight < '2900'
    ) {
      this.el.nativeElement.children[0].style.height = `${
        this.uiServices.profileComponentHeight + 200
      }px`;
      return;
    }
    if (
      this.uiServices.profileComponentHeight > '2900' &&
      this.uiServices.profileComponentHeight < '3500'
    ) {
      this.el.nativeElement.children[0].style.height = `${
        this.uiServices.profileComponentHeight + 300
      }px`;
      return;
    }
    if (
      this.uiServices.profileComponentHeight > '1800' &&
      this.uiServices.profileComponentHeight < '2050'
    ) {
      this.el.nativeElement.children[0].style.height = `${
        this.uiServices.profileComponentHeight + 450
      }px`;
      return;
    }
    this.el.nativeElement.children[0].style.height = `${
      this.uiServices.profileComponentHeight + 550
    }px`;
    // console.log(this.el.nativeElement.children[0]);
  }
}
