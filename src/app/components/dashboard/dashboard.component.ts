import { CommonModule } from '@angular/common';
import { Component,ElementRef, Renderer2 } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

   
  }

