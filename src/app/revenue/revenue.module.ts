import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevenueRoutingModule } from './revenue-routing.module';
import { RevenueHomeComponent } from './revenue-home/revenue-home.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { SubCardsComponent } from './sub-cards/sub-cards.component';
import { MatIconModule } from '@angular/material/icon';
import { InvoicesComponent } from './invoices/invoices.component';
import { EditCardComponent } from './edit-card/edit-card.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BillingInformationComponent } from './billing-information/billing-information.component';
import { YourTransactionsComponent } from './your-transactions/your-transactions.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    RevenueHomeComponent,
    CreditCardComponent,
    SubCardsComponent,
    InvoicesComponent,
    EditCardComponent,
    BillingInformationComponent,
    YourTransactionsComponent,
  ],
  imports: [
    CommonModule,
    RevenueRoutingModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
  ],
})
export class RevenueModule {}
