import { Routes } from '@angular/router';
import { Routes } from './home/home.component';
import { Routes } from './about/about.component';
import { Routes } from './projects/projects.component';
import { Routes } from './contact/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
];
