import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  frontendSkills: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'Angular',
    'Bootstrap',
    'Tailwind CSS',
    'React.js (Basic)',
    'REST API Basics',
  ];

  backendSkills: string[] = [
    'C',
    'C++',
    'PHP',
    'Python',
    'Laravel',
    'C#',
    'ASP.NET',
    'Node.js',
    'Express.js',
  ];

  databaseSkills: string[] = ['SQL', 'MySQL', 'Microsoft SQL Server'];

  otherToolsSkills: string[] = [
    'Git',
    'GitHub',
    'SQL Server Management Studio',
    'Figma',
    'Adobe Photoshop',
    'Adobe Premiere',
  ];
}
