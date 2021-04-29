import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {
  
  public barChartData: ChartDataSets[] = [
    {
      label: "signup",
      data: [5, 6, 4.5, 5.5, 3, 6, 4.5, 6, 8, 3, 5.5, 4],
      // data: [2, 3.2, 1.8, 2.1, 1.5, 3.5, 4, 2.3, 2.9, 4.5, 1.8, 3.4, 2.8],
      backgroundColor: "#4c84ff"
    }
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
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
          },
          offset: true
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
      bodyFontSize: 15,
      backgroundColor: "rgba(256,256,256,0.95)",
      displayColors: false,
      borderColor: "rgba(220, 220, 220, 0.9)",
      borderWidth: 2
    }
   
  };
  public barChartLabels: Label[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartColors: any  =[
    // {
    //   backgroundColor:'#007bff',
    //   borderColor: "rgba(10,150,132,1)",
    //  // borderWidth: 5
    // }
]

  constructor() { }

  ngOnInit(): void {
  }

}
