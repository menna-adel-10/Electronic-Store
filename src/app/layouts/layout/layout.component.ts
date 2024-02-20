import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
isSidebarToggled: boolean = false;

  constructor(private renderer: Renderer2) {}

  toggleSidebar() {
    const wrapper = document.getElementById('wrapper');
    this.isSidebarToggled = !this.isSidebarToggled;

    if (this.isSidebarToggled) {
      this.renderer.addClass(wrapper, 'toggled');
    } else {
      this.renderer.removeClass(wrapper, 'toggled');
    }
  }
}
