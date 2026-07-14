import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  @Output() scrollToSection = new EventEmitter<string>();

  onScrollToSection(section: string) {
    this.scrollToSection.emit(section);
  }

  skills: string[] = [
  'Angular',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Bootstrap',
  // 'Tailwind CSS',
  // 'SASS/SCSS',
  // 'React.js',
  // 'Next.js',
  'Node.js',
  'Express.js',
  'PHP',
  'MySQL',
  'SQL Server Management Studio',
  'RESTful APIs',
  // 'JSON',
  // 'AJAX',
  // 'jQuery',
  'Git',
  // 'Figma',
  // 'Adobe Photoshop',
  // 'Adobe Premiere'
];
}
