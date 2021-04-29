import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-saleschart',
  templateUrl: './saleschart.component.html',
  styleUrls: ['./saleschart.component.scss']
})
export class SaleschartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    {
      label: "",
      backgroundColor: "transparent",
      borderColor: "rgb(82, 136, 255)",
      data: [
        100,
        11000,
        10000,
        14000,
        11000,
        17000,
        14500,
        18000,
        5000,
        23000,
        14000,
        19000
      ],
      lineTension: 0.3,
      pointRadius: 5,
      pointBackgroundColor: "rgba(255,255,255,1)",
      pointHoverBackgroundColor: "rgba(255,255,255,1)",
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      pointHoverBorderWidth: 1,
      pointBorderColor:"#4c84ff"
    }
  ];
  public lineChartLabels: Label[] = [
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
  "Dec"];
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
            display: false
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            color: "#eee",
            zeroLineColor: "#eee",
          },
          ticks: {
            callback: function(value) {
              var ranges = [
                { divider: 1e6, suffix: "M" },
                { divider: 1e4, suffix: "k" }
              ];
              function formatNumber(n) {
                for (var i = 0; i < ranges.length; i++) {
                  if (n >= ranges[i].divider) {
                    return (
                      (n / ranges[i].divider).toString() + ranges[i].suffix
                    );
                  }
                }
                return n;
              }
              return formatNumber(value);
            }
          }
        }
      ]
    },
    // tooltips: {
    //   callbacks: {
    //     title: (tooltipItem, data) => {
    //       return data["labels"][tooltipItem[0]["index"]];
    //     },
    //     label: function(tooltipItem, data) {
    //       return "$" + data["datasets"][0]["data"][tooltipItem["index"]];
    //     }
    //   },
    //   responsive: true,
    //   intersect: false,
    //   enabled: true,
    //   titleFontColor: "#888",
    //   bodyFontColor: "#555",
    //   titleFontSize: 12,
    //   bodyFontSize: 18,
    //   backgroundColor: "rgba(256,256,256,0.95)",
    //   xPadding: 20,
    //   yPadding: 10,
    //   displayColors: false,
    //   borderColor: "rgba(220, 220, 220, 0.9)",
    //   borderWidth: 2,
    //   caretSize: 10,
    //   caretPadding: 15
    // }
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

