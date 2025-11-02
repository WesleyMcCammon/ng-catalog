import { AfterViewInit, Component, Input } from '@angular/core';
import { UtilityService } from '../../service/utility-service';
import { Site } from '../../model/site-model';

@Component({
  selector: 'app-splash-page-component',
  imports: [],
  templateUrl: './splash-page-component.html',
  styleUrl: './splash-page-component.css',
})
export class SplashPageComponent implements AfterViewInit {
  splashImageUrl: string = 'https://images.unsplash.com/photo-1586965142106-83751d8f57a3';
  splashImageAltText: string = 'Modern retail showroom with elegant product displays and sophisticated lighting';
  splashErrorImageUrl: string = '';
  splashImageTextOverlayTitle: string = 'The Digital Showroom';
  splashImageTextOverlaySubTitle: string = 'Revolution';
  // splashImageTextOverlayDescription: string = '';

  @Input() subTitle: string = '';

  constructor(private utilityService: UtilityService) {}

  ngAfterViewInit(): void { 

    // this.utilityService.siteTitleChangeEventEmitter.subscribe((site: Site) => {
    //   debugger;
    // });
    // this.utilityService.siteTitleChangeEventEmitter.subscribe((site: Site) => {
    //   debugger;
    //   this.splashImageTextOverlayDescription = site.subTitle
    // });
  }
}
