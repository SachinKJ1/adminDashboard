import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  @Input() bg: string = '';
  @Input() content: string = '';
  @Input() count: string = '';
  @Input() growth: string = '';
  @Input() growthContent: string = '';
  @Input() icon: string = '';


  growthClass(){
    if(this.growth.includes('-')){
      return true
    }
    return false
  }
}
