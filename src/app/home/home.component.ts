import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  PLATFORM_ID,
  inject,
  OnDestroy,
  ViewChild,
} from '@angular/core';

import { CommonModule, isPlatformBrowser } from '@angular/common';

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
export class HomeComponent implements OnInit, OnDestroy {
  // ================= STATE VARIABLES =================
  menuOpen = false;
  showBackToTop = false;
  isDarkMode = false;

  // ================= INJECTIONS =================
  private platformId = inject(PLATFORM_ID);
  private removeScrollListener?: () => void;

  @ViewChild('hamburgerButton')
  private hamburgerButton?: ElementRef<HTMLButtonElement>;

  // ================= CONSTRUCTOR =================
  constructor(
    // Inject the Renderer2 and ElementRef for DOM manipulation
    private renderer: Renderer2,
    private el: ElementRef,
  ) {}

  // ONLY ONE
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  // ONLY ONE
  closeMenu(restoreFocus = true): void {
    const wasOpen = this.menuOpen;

    this.menuOpen = false;

    if (restoreFocus && wasOpen && isPlatformBrowser(this.platformId)) {
      this.hamburgerButton?.nativeElement.focus();
    }
  }

  scrollToSection(sectionId: string): void {
    // Prevent document access during server-side rendering.
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }

    this.closeMenu(false);
  }

  toggleDarkMode(): void {
    // Prevent browser-only APIs from running during SSR.
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Update Angular's theme state immediately.
    this.isDarkMode = !this.isDarkMode;

    const body = document.body;

    if (this.isDarkMode) {
      this.renderer.addClass(body, 'dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      this.renderer.removeClass(body, 'dark-mode');
      localStorage.setItem('darkMode', 'disabled');
    }
  }

  // ================= LIFECYCLE HOOKS =================
  ngOnInit(): void {
    // Stop browser-only code from executing during SSR.
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Restore the saved dark-mode preference.
    this.isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }

    // Show the Back to Top button after scrolling.
    this.removeScrollListener = this.renderer.listen('window', 'scroll', () => {
      this.showBackToTop = window.scrollY > 300;
    });

    this.showBackToTop = window.scrollY > 300;
  }

  // ================= BACK TO TOP =================
  scrollToTop(): void {
    // Prevent window access during server-side rendering.
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  // ================= CLEANUP =================
  ngOnDestroy(): void {
    this.removeScrollListener?.();
  }
}
