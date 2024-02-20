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
      iconColors = ['text-primary-emphasis', 'text-success-emphasis', 'text-danger-emphasis'];


  getIconColor(index: number): string {
    const colorIndex = index % this.iconColors.length;
    return this.iconColors[colorIndex];
  }
}
