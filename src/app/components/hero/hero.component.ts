import { Component } from '@angular/core';
import { Data } from '../../../assets/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  data = Data;


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
