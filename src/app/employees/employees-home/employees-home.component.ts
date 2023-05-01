import { Component } from '@angular/core';
import { UiService } from 'src/app/UI-services/ui.service';

@Component({
  selector: 'app-employees-home',
  templateUrl: './employees-home.component.html',
  styleUrls: ['./employees-home.component.css']
})
export class EmployeesHomeComponent {
  constructor(private uiServices: UiService) {}

  onBgColorChange(){
    if (this.uiServices.bgColor === 'dark') {
      return 'table-dark';
    }
    return 'table-light';
  }
  onBgChange(){
    if (this.uiServices.bgColor === 'dark') {
      return 'background-black';
    }
    return 'background-white';
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