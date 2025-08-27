import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-portfolio';
  isDarkMode: boolean = false;  // Declare the dark mode property

  ngOnInit(): void {
    // Ensure localStorage is accessed only in the browser
    if (typeof window !== 'undefined' && localStorage.getItem('darkMode') === 'enabled') {
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
}
