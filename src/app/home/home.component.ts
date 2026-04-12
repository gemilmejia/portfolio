import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  contact: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    // Ensure localStorage is accessed only in the browser
    if (typeof window !== 'undefined' && localStorage.getItem('darkMode') === 'enabled') {
      this.renderer.addClass(this.el.nativeElement, 'dark-mode');
      this.updateDarkModeIcon(true);
    } else {
      this.updateDarkModeIcon(false);
    }
    this.setupScrollListener();
  }

  scrollToSection(sectionId: string): void {
    if (typeof document === 'undefined') return;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleDarkMode(): void {
    const isDarkMode = this.el.nativeElement.classList.contains('dark-mode');
    if (isDarkMode) {
      this.renderer.removeClass(this.el.nativeElement, 'dark-mode');
      if (typeof window !== 'undefined') {
        localStorage.setItem('darkMode', 'disabled');
      }
      this.updateDarkModeIcon(false);
    } else {
      this.renderer.addClass(this.el.nativeElement, 'dark-mode');
      if (typeof window !== 'undefined') {
        localStorage.setItem('darkMode', 'enabled');
      }
      this.updateDarkModeIcon(true);
    }
  }

  private updateDarkModeIcon(isDarkMode: boolean): void {
    if (typeof document === 'undefined') return;
    const icon = document.querySelector('#darkModeToggle i');
    if (icon) {
      if (isDarkMode) {
        icon.classList.replace('fa-moon', 'fa-sun');
      } else {
        icon.classList.replace('fa-sun', 'fa-moon');
      }
    }
  }

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form submitted:', this.contact);
      alert('Thank you for your message! I will get back to you soon.');
      this.contact = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      form.resetForm();
    }
  }

}
