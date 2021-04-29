import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';


@Component({
  selector: 'app-polar',
  templateUrl: './polar.component.html',
  styleUrls: ['./polar.component.scss']
})
export class PolarComponent implements OnInit {
  // PolarArea
  public polarAreaChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';
  public barChartOptions: ChartOptions = {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: "right",
            display: false
          },
          layout: {

          },
          title: {
            display: false,
            text: "Chart.js Polar Area Chart"
          },
          scale: {
            ticks: {
              beginAtZero: true,
              fontColor: "#1b223c",
              fontSize: 12,
              
              max: 400
            }
          }

  }

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
