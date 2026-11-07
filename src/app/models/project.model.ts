export interface Project {
  id: number;
  title: string;
  description: string[];
  image: string;
  imageAlt: string;
  technologies: string[];
  links: ProjectLink[];
}

export interface ProjectLink {
  label: string;
  url: string;
  ariaLabel: string;
}
