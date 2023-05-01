import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-sub-cards',
  templateUrl: './sub-cards.component.html',
  styleUrls: ['./sub-cards.component.css']
})
export class SubCardsComponent {
@Input() icon = ''
@Input() heading = ''
@Input() contents = ''
@Input() money = ''
}

