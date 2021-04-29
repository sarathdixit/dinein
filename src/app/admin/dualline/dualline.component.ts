import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-dualline',
  templateUrl: './dualline.component.html',
  styleUrls: ['./dualline.component.scss']
})
export class DuallineComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    {
      label: "Old",
      pointRadius: 4,
      pointBorderColor:"#fdc506",

      pointBackgroundColor: "rgba(255,255,255,1)",
      pointBorderWidth: 2,
      fill: false,
      backgroundColor: "transparent",
      borderWidth: 2,
      borderColor: "#fdc506",
      data: [0, 4, 3, 5.5, 3, 4.7, 0]
    },
    {
      label: "New",
      fill: false,
      pointRadius: 4,
      pointBorderColor:"#4c84ff",
      pointBackgroundColor: "rgba(255,255,255,1)",
      pointBorderWidth: 2,
      backgroundColor: "transparent",
      borderWidth: 2,
      borderColor: "#4c84ff",
      data: [0, 2, 4.3, 3.8, 5.2, 1.8, 2.2]
    }
  ];
  public lineChartLabels: Label[] = ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"];
  public lineChartOptions:ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        right: 10
      }
    },

    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            display: false
          },
          ticks: {
            display: false, // hide main x-axis line
            beginAtZero: true
          }
          // barPercentage: 1.8,
          // categoryPercentage: 0.2
        }
      ],
      yAxes: [
        {
          gridLines: {
            drawBorder: false, // hide main y-axis line
            display: false
          },
          ticks: {
            display: false,
            beginAtZero: true
          }
        }
      ]
    },
    tooltips: {
      titleFontColor: "#888",
      bodyFontColor: "#555",
      titleFontSize: 12,
      bodyFontSize: 14,
      backgroundColor: "rgba(256,256,256,0.95)",
      displayColors: true,
      borderColor: "rgba(220, 220, 220, 0.9)",
      borderWidth: 2
    }
  };
  public lineChartColors: Color[] = [
    // {
    //   borderColor: 'black',
    //   backgroundColor: 'rgba(255,0,0,0.3)',
    // },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit(): void {
  }

}
