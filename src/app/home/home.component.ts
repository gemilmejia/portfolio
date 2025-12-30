import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    // Ensure localStorage is accessed only in the browser
    if (typeof window !== 'undefined' && localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
    }
    this.setupScrollListener();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleDarkMode(): void {
    document.body.classList.toggle('dark-mode');
    if (typeof window !== 'undefined') {
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setupScrollListener(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        const aboutSection = document.getElementById('about');
        const projectsSection = document.getElementById('projects');
        const contactSection = document.getElementById('contact');
        const backToTopBtn = document.getElementById('backToTopBtn');

        if (backToTopBtn) {
          const isInAbout = aboutSection && this.isElementInViewport(aboutSection);
          const isInProjects = projectsSection && this.isElementInViewport(projectsSection);
          const isInContact = contactSection && this.isElementInViewport(contactSection);

          if (isInAbout || isInProjects || isInContact) {
            backToTopBtn.classList.add('show');
          } else {
            backToTopBtn.classList.remove('show');
          }
        }
      });
    }
  }

  private isElementInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

}
