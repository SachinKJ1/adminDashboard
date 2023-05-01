import { Component } from '@angular/core';
import { UiService } from 'src/app/UI-services/ui.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  inp = 3;
  displayedColumns: string[] = ['companies', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(private uiServices: UiService) {}
  onBgColorChanges() {
    if (this.uiServices.bgColor === 'dark') {
      return 'background-black';
    }
    return 'background-white';
  }
  onTextColorChanges() {
    if (this.uiServices.bgColor === 'dark') {
      return 'textColor-white';
    }
    return 'textColor-black';
  }
}
export interface PeriodicElement {
  name: string;
  companies: string;
  weight: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    companies: 'Material XDV',
    name: 'Micah, Tilly, Lenny, Cornwall',
    weight: '$120,500',
    symbol: '60%',
  },
  {
    companies: 'Atlassian',
    name: 'John, Abigail, Jack',
    weight: '$30,000',
    symbol: '10%',
  },
  {
    companies: 'Team7',
    name: 'Dutch, Driscoll, Milton, Keiran',
    weight: '$50,000	',
    symbol: '100%',
  },
  {
    companies: 'Spotify',
    name: 'Sadie , Morgan, Charles, Eagle Flies',
    weight: '$100,000	',
    symbol: '100%',
  },
  {
    companies: 'Jira',
    name: 'Javier, Bill, Susan, Rain Fall',
    weight: '$20,500	',
    symbol: '25%',
  },
  {
    companies: 'User5',
    name: 'Hossea, Strauss, Grimshaw, Monroe',
    weight: '$50,000',
    symbol: '40%',
  },
];
