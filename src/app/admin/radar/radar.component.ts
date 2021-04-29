import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements OnInit {
  public radarChartOptions: RadialChartOptions = {
    layout: {
      padding: {
        right: 10
      }
    },

    legend: {
      display: false
    },
    scales: {

      ticks: {
        beginAtZero: true,
        max: 5,
        min: 0,
        stepSize: 1

      }
    }

  };
  public radarChartLabels: Label[] = [          
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"];

  public radarChartData: ChartDataSets[] = [
    {
      label: "Current Year",
      backgroundColor: "rgba(76,132,255,0.2)",
      borderColor: "#4c84ff",
      pointBorderWidth: 2,
      pointRadius: 4,
      pointBorderColor: "rgba(76,132,255,1)",
      pointBackgroundColor: "#ffffff",
      data: [25, 31, 43, 48, 21, 36, 23, 12, 33, 36, 28, 55]
    },
    {
      label: "Previous Year",
      backgroundColor: "rgba(41, 204, 151, 0.2)",
      borderColor: "#29cc97",
      pointBorderWidth: 2,
      pointRadius: 4,
      pointBorderColor: "#29cc97",
      pointBackgroundColor: "#ffffff",
      data: [45, 77, 22, 12, 56, 43, 71, 23, 54, 19, 32, 55]
    }
  ];
  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit(): void {
  }

}
