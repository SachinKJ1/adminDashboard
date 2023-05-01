import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graph2',
  templateUrl: './graph2.component.html',
  styleUrls: ['./graph2.component.css'],
})
export class Graph2Component {
  @Input() color = '';
  @Input() colorText = '';
  Highcharts = Highcharts;
  chartOptions = {};
  constructor() {}
  ngOnChanges() {
    this.chartOptions = {
      chart: {
        type: 'line',
        backgroundColor: this.color,
      },
      title: {
        text: null,
      },

      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        labels: {
          style: {
            color: this.colorText,
          },
        },
      },
      yAxis: {
        title: {
          text: 'Sales',
          style: {
            color: this.colorText,
          },
        },
        labels: {
          style: {
            color: this.colorText,
          },
        },
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true,
          },
          enableMouseTracking: false,
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Reggane',
          data: [600, 740, 850, 960, 735, 898, 790, 840, 700, 975, 945, 854],
        },
      ],
    };
  }
}
