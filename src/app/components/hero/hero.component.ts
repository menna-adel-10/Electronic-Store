import { Component } from '@angular/core';
import { Data } from '../../../assets/data';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  data = Data;
  barChart: any = [];

   constructor() {
    Chart.register(...registerables)
  }

  ngOnInit(): void {
    this.barChart = new Chart('canva', {
      type: 'bar',
      data: {
        labels: [
          'Eating',
          'Drinking',
          'Sleeping',
          'Designing',
          'Coding',
          'Cycling',
          'Running'
        ],
        datasets: [{
          label: 'Activities',
          barPercentage: 0.5,
          barThickness: 20,
          maxBarThickness: 15,
          minBarLength: 0,

          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            '#00d1de',
            '#00d1de',
            '#00d1de',
            '#00d1de',
            '#00d1de',
            '#00d1de',
            '#00d1de'
          ],

          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,

          },
          x: {

            grid: {
              offset: true
            }
          },
        }
      },
    })

  }


  getIconColor(index: number): string {
    if (index % 3 === 0) {
      return 'text-primary';
    } else if (index % 3 === 1) {
      return 'text-info';
    } else {
      return 'text-success';
    }

  }


}
