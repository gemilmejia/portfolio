import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Angular To-Do List',
      description: [
        'A responsive task management application built with Angular 19 and TypeScript. Supports task creation, editing, completion, searching, filtering, sorting, and persistent local storage.',
        'Integrated with REST APIs and RxJS for asynchronous data handling, with 192 automated Jasmine/Karma tests to ensure application reliability.',
      ],
      image: 'assets/images/angular-todo-list-optimized.png',
      imageAlt: 'Screenshot of Angular To-Do List application',
      technologies: [
        'Angular 19',
        'TypeScript',
        'RxJS',
        'REST API',
        'Jasmine/Karma',
        'GitHub Actions',
      ],
      links: [
        {
          label: 'Live Demo',
          url: 'https://gemilmejia.github.io/todo-list/',
          ariaLabel: 'View Angular To-Do List live demo',
        },
        {
          label: 'GitHub',
          url: 'https://github.com/gemilmejia/todo-list',
          ariaLabel: 'View Angular To-Do List source code on GitHub',
        },
      ],
    },
    {
      id: 2,
      title: 'TUP Compass Website',
      description: [
        'A responsive organizational website for TUP COMPASS, built using HTML, CSS, JavaScript, PHP, and MySQL, designed to deliver accessible information and a seamless user experience across devices.',
      ],
      image: 'assets/images/TUPCompass.jpg',
      imageAlt: 'Screenshot of TUP Compass Website',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      links: [
        {
          label: 'Video Demo',
          url: 'https://www.youtube.com/watch?v=iLaBG1PubCc',
          ariaLabel: 'Watch TUP Compass Website video demo on YouTube',
        },
      ],
    },
  ];
}
