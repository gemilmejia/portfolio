import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { DesignComponent } from '../design';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    DesignComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  // ================= SIDEBAR STATE =================
  menuOpen = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  // ================= DARK MODE INIT =================
  ngOnInit(): void {
    if (
      typeof window !== 'undefined' &&
      localStorage.getItem('darkMode') === 'enabled'
    ) {
      this.renderer.addClass(this.el.nativeElement, 'dark-mode');
    }
  }

  // ================= SIDEBAR =================
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  // ================= NAVIGATION =================
  scrollToSection(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }

    this.menuOpen = false;
  }

  // ================= DARK MODE =================
  toggleDarkMode(): void {
    const isDark = this.el.nativeElement.classList.contains('dark-mode');

    if (isDark) {
      this.renderer.removeClass(this.el.nativeElement, 'dark-mode');
      localStorage.setItem('darkMode', 'disabled');
    } else {
      this.renderer.addClass(this.el.nativeElement, 'dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    }
  }

  // ================= BACK TO TOP =================
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
