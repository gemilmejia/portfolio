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
  'Javascript',
  'Angular',
  'Bootstrap',
  'Tailwind CSS',
  'ReactJS'
];

backendSkills: string[] = [
  'C',
  'C++',
  'PHP',
  'Python',
  'Laravel',
  'C#',
  'ASP.NET',
  'RestAPI Basics',
  'Node.js',
  'Express.js'
];

databaseSkills: string[] = [
  'SQL',
  'MySQL',
  'SQL Server Management Studio',
];

otherToolsSkills: string[] = [
  'Git',
  'GitHub',
  'Figma',
  'Adobe Photoshop',
  'Adobe Premiere'
];
}
