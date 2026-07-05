import { Component, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DesignItem {
  title: string;
  description: string;
  image: string;
  alt: string;
  overlay: string;
}

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss'],
})
export class DesignComponent implements OnDestroy {
  // Keeps the gallery content in one place and preserves the existing portfolio copy.
  designItems: DesignItem[] = [
    {
      title: 'CarsPH UI Design',
      description:
        'A responsive marketplace interface designed for automotive browsing and content presentation. This project focuses on modern UI structure, clean typography, organized spacing, and user-friendly navigation to improve readability and user engagement. The layout highlights responsive sections, content hierarchy, and visual balance suitable for web and mobile experiences.',
      image: 'assets/images/CARSPH.png',
      alt: 'UI design concept',
      overlay: 'UI Design Concept',
    },
    {
      title: 'Compass Logo Design',
      description:
        'A brand identity concept centered around direction, exploration, and professionalism. The compass symbol represents guidance and precision, while the strong contrast, typography, and dark visual theme create a bold and memorable brand presence. The design emphasizes clarity, symbolism, and modern visual branding principles.',
      image: 'assets/images/COMPASS.png',
      alt: 'Logo design',
      overlay: 'Logo Design',
    },
    {
      title: '3X Logistics Logo Design',
      description:
        'A modern logo concept created for a logistics and delivery brand. The design combines minimalist structure, vibrant color contrast, and symbolic elements to represent movement, growth, and reliability. The clean composition and balanced visual styling were developed to support strong brand recognition across digital platforms and marketing materials.',
      image: 'assets/images/LuckinMotion.png',
      alt: 'Logo design',
      overlay: 'Logo Design',
    },
  ];

  selectedItem: DesignItem | null = null;
  isPreviewOpen = false;

  @HostListener('document:keydown.escape')
  handleEscapeKey(): void {
    if (this.isPreviewOpen) {
      this.closePreview();
    }
  }

  // Opens the fullscreen preview for a selected gallery image.
  openPreview(item: DesignItem): void {
    this.selectedItem = item;
    this.isPreviewOpen = true;

    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  // Closes the preview and restores normal page scrolling.
  closePreview(): void {
    this.isPreviewOpen = false;
    this.selectedItem = null;

    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  ngOnDestroy(): void {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
}
