import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    {
      label: "New",
      pointHitRadius: 10,
      pointRadius: 0,
      fill: true,
      backgroundColor: "rgba(76, 132, 255, 0.9)",
      borderColor: "rgba(76, 132, 255, 0.9)",
      data: [0, 4, 2, 6.5, 3, 4.7, 0],
      borderWidth: 0
    },
    {
      label: "Old",
      pointHitRadius: 10,
      pointRadius: 0,
      fill: true,
      backgroundColor: "rgba(253, 197, 6, 0.9)",
      borderColor: "rgba(253, 197, 6, 1)",
      data: [0, 2, 4.3, 3.8, 5.2, 1.8, 2.2],
      borderWidth: 0
    }
  ];
  public lineChartLabels: Label[] = ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"];
  public lineChartOptions:ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    layout: {
      padding: {
        right: 10
      }
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

