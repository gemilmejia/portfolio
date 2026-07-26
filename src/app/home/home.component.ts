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


  // ONLY ONE
  menuOpen = false;

  showBackToTop = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}



  // ONLY ONE
  toggleMenu(): void {

    this.menuOpen = !this.menuOpen;

  }



  // ONLY ONE
  closeMenu(): void {

    this.menuOpen = false;

  }



  scrollToSection(sectionId: string): void {

    const element = document.getElementById(sectionId);


    if (element) {

      element.scrollIntoView({
        behavior: 'smooth'
      });

    }


    this.closeMenu();

  }



  toggleDarkMode(): void {

    const body = document.body;


    if (body.classList.contains('dark-mode')) {

      this.renderer.removeClass(
        body,
        'dark-mode'
      );

      localStorage.setItem(
        'darkMode',
        'disabled'
      );


    } else {


      this.renderer.addClass(
        body,
        'dark-mode'
      );


      localStorage.setItem(
        'darkMode',
        'enabled'
      );

    }

  }



  ngOnInit(): void {

    if (
      localStorage.getItem('darkMode') === 'enabled'
    ) {

      this.renderer.addClass(
        document.body,
        'dark-mode'
      );

    }

  // Back to top visibility
  window.addEventListener('scroll', () => {

    this.showBackToTop = window.scrollY > 300;

  });


  }

  // ================= BACK TO TOP =================
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
