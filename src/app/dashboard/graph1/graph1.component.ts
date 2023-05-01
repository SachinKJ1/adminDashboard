import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { UiService } from 'src/app/UI-services/ui.service';
@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styleUrls: ['./graph1.component.css'],
})
export class Graph1Component {
  @Input() color = '';
  @Input() colorText = '';

  Highcharts = Highcharts;

  chartOptions = {};
  constructor(private uiServices: UiService) {}

  ngOnInit() {}

  ngOnChanges() {
    this.chartOptions = {
      chart: {
        type: 'column',
        backgroundColor: this.color,
      },
      title: {
        align: 'left',
        text: null,
      },
      subtitle: {
        align: 'left',
        // text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
      },
      accessibility: {
        announceNewData: {
          enabled: true,
        },
      },
      xAxis: {
        type: 'category',
        labels: {
          style: {
            color: this.colorText,
          },
        },
      },
      yAxis: {
        title: {
          text: 'Percentage',
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
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%',
          },
        },
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat:
          '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
      },
      credits: {
        enabled: false,
      },

      series: [
        {
          name: 'SHARES',
          colorByPoint: true,
          data: [
            {
              name: 'SUN',
              y: 63.06,
              drilldown: 'Chrome',
            },
            {
              name: 'MON',
              y: 55.84,
              drilldown: 'Safari',
            },
            {
              name: 'TUE',
              y: 64.18,
              drilldown: 'Firefox',
            },
            {
              name: 'WED',
              y: 74.12,
              drilldown: 'Edge',
            },
            {
              name: 'THU',
              y: 62.33,
              drilldown: 'Opera',
            },
            {
              name: 'FRI',
              y: 60.45,
              drilldown: 'Internet Explorer',
            },
            {
              name: 'SAT',
              y: 51.582,
              drilldown: 'S',
            },
          ],
        },
      ],
      drilldown: {
        breadcrumbs: {
          position: {
            align: 'right',
          },
        },
        series: [
          {
            name: 'Chrome',
            id: 'Chrome',
            data: [
              ['v65.0', 0.1],
              ['v64.0', 1.3],
              ['v63.0', 53.02],
              ['v62.0', 1.4],
              ['v61.0', 0.88],
              ['v60.0', 0.56],
              ['v59.0', 0.45],
              ['v58.0', 0.49],
              ['v57.0', 0.32],
              ['v56.0', 0.29],
              ['v55.0', 0.79],
              ['v54.0', 0.18],
              ['v51.0', 0.13],
              ['v49.0', 2.16],
              ['v48.0', 0.13],
              ['v47.0', 0.11],
              ['v43.0', 0.17],
              ['v29.0', 0.26],
            ],
          },
          {
            name: 'Firefox',
            id: 'Firefox',
            data: [
              ['v58.0', 1.02],
              ['v57.0', 7.36],
              ['v56.0', 0.35],
              ['v55.0', 0.11],
              ['v54.0', 0.1],
              ['v52.0', 0.95],
              ['v51.0', 0.15],
              ['v50.0', 0.1],
              ['v48.0', 0.31],
              ['v47.0', 0.12],
            ],
          },
          {
            name: 'Internet Explorer',
            id: 'Internet Explorer',
            data: [
              ['v11.0', 6.2],
              ['v10.0', 0.29],
              ['v9.0', 0.27],
              ['v8.0', 0.47],
            ],
          },
          {
            name: 'Safari',
            id: 'Safari',
            data: [
              ['v11.0', 3.39],
              ['v10.1', 0.96],
              ['v10.0', 0.36],
              ['v9.1', 0.54],
              ['v9.0', 0.13],
              ['v5.1', 0.2],
            ],
          },
          {
            name: 'Edge',
            id: 'Edge',
            data: [
              ['v16', 2.6],
              ['v15', 0.92],
              ['v14', 0.4],
              ['v13', 0.1],
            ],
          },
          {
            name: 'Opera',
            id: 'Opera',
            data: [
              ['v50.0', 0.96],
              ['v49.0', 0.82],
              ['v12.1', 0.14],
            ],
          },
        ],
      },
    };
  }

  onColor() {
    if (this.uiServices.bgColor == 'dark') {
      return '#000';
    } else {
      return '#ffff';
    }

    /*
    onBgColorChange() {
    if (this.uiServices.bgColor === 'dark') {
        this.graphBgColor = '#000'
        this.graphTextColor = '#ffff'
        console.log('hai');
        
        return 'sdfs'
    }else{
        this.graphBgColor = '#ffff'
        this.graphTextColor = '#000'
        return 'sdfs'
    }
  } */
  }
}
