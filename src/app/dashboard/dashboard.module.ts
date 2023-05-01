import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { CardsComponent } from './cards/cards.component';
import { MatIconModule } from '@angular/material/icon';
import { Graph1Component } from './graph1/graph1.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { Graph2Component } from './graph2/graph2.component';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { StepperComponent } from './stepper/stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { Graph3Component } from './graph3/graph3.component';

@NgModule({
  declarations: [
    DashboardHomeComponent,
    CardsComponent,
    Graph1Component,
    Graph2Component,
    TableComponent,
    StepperComponent,
    Graph3Component,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    HighchartsChartModule,
    MatTableModule,
    MatStepperModule,
  ],
})
export class DashboardModule {}
