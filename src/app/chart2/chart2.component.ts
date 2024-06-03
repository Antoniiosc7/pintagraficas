import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from '../data.service';
import { HighchartsChartComponent } from 'highcharts-angular';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit, AfterViewInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      type: 'line',
      data: []
    }]
  };
  @ViewChild('chartRef') chartRef!: HighchartsChartComponent;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getMetricsData().subscribe(metricsData => {
      if (metricsData && metricsData.values) {
        const categories = metricsData.values.map((value: any) => value[0]);
        const seriesData = metricsData.values.map((value: any) => {
          const dataValue = value[16];
          return typeof dataValue === 'number' ? dataValue : 0;
        });

        this.chartOptions = {
          chart: {
            type: 'line',
          },
          title: {
            text: 'Metricas de Desarrollo'
          },
          xAxis: {
            categories: categories
          },
          yAxis: {
            title: {
              text: 'Valor de Métricas'
            }
          },
          series: [{
            type: 'line',
            name: 'metric_NUMBER_GH_MERGEDPR',
            data: seriesData as any
          }]
        };
      } else {
        console.error('El formato de los datos no es el esperado.');
      }
    }, error => {
      console.error('Error al cargar los datos:', error);
    });
  }

  ngAfterViewInit(): void {
    this.updateChart();
  }

  updateChart(): void {
    if (this.chartRef) {
      this.chartOptions.series = [{
        type: 'line',
        name: 'metric_COUNT_DONEISSUES_MEMBER',
        data: (this.chartOptions.series?.[0] as Highcharts.SeriesLineOptions)?.data || []
      }];
      this.chartRef.updateOrCreateChart();
    }
  }
}
