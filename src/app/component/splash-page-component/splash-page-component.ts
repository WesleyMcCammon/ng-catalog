import { Component } from '@angular/core';

@Component({
  selector: 'app-splash-page-component',
  imports: [],
  templateUrl: './splash-page-component.html',
  styleUrl: './splash-page-component.css',
})
export class SplashPageComponent {
  splashImageUrl: string = 'https://images.unsplash.com/photo-1586965142106-83751d8f57a3';
  splashImageAltText: string = 'Modern retail showroom with elegant product displays and sophisticated lighting';
  splashErrorImageUrl: string = '';
  splashImageTextOverlayTitle: string = 'The Digital Showroom';
  splashImageTextOverlaySubTitle: string = 'Revolution';
  splashImageTextOverlayDescription: string = 'Transform product browsing into an engaging discovery journey. Every product tells a story, every interaction feels intentional.';

}
