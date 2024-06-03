import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-union',
  templateUrl: './union.component.html',
  styleUrls: ['./union.component.css']
})
export class UnionComponent implements OnInit {
  chart: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getMetricsData().subscribe(metricsData => {
      if (metricsData && metricsData.values) {
        const categories = metricsData.values.map((value: any) => value[0]);
        const seriesData1 = metricsData.values.map((value: any) => {
          const dataValue = value[5];
          return typeof dataValue === 'number' ? dataValue : 0;
        });
        const seriesData2 = metricsData.values.map((value: any) => {
          const dataValue = value[16];
          return typeof dataValue === 'number' ? dataValue : 0;
        });

        this.createCombinedChart(categories, seriesData1, seriesData2);
      } else {
        console.error('El formato de los datos no es el esperado.');
      }
    }, error => {
      console.error('Error al cargar los datos:', error);
    });
  }

  createCombinedChart(categories: any[], seriesData1: any[], seriesData2: any[]): void {
    const ctx = document.getElementById('combinedChart');
    // @ts-ignore
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: categories,
        datasets: [{
          label: 'Metric_COUNT_DONEISSUES_MEMBER',
          data: seriesData1,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }, {
          label: 'Metric_NUMBER_GH_MERGEDPR',
          data: seriesData2,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
