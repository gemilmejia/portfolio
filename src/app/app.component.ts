import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { DesignComponent } from './design/design.component';
import { ContactComponent } from './contact/contact.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    DesignComponent,
    ContactComponent,
  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-portfolio';
  isDarkMode: boolean = false; // Declare the dark mode property
  showBackToTop = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Ensure localStorage is accessed only in the browser
    if (
      typeof window !== 'undefined' &&
      localStorage.getItem('darkMode') === 'enabled'
    ) {
      this.isDarkMode = true;
      document.body.classList.add('dark-mode');
    }
  }

  toggleDarkMode(): void {
    // Toggle the dark mode state
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode'); // Toggle the dark mode class

    // Ensure localStorage is accessed only in the browser
    if (typeof window !== 'undefined') {
      // Save the dark mode preference to localStorage
      if (this.isDarkMode) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    }
  }

  scrollToSection(section: string): void {
    this.router.navigate([], { fragment: section }).then(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showBackToTop = window.pageYOffset > 320;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
