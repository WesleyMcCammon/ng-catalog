import { Component, Input } from '@angular/core';
import { UtilityService } from '../../service/utility-service';
import { Site } from '../../model/site-model';

@Component({
  selector: 'app-footer-component',
  imports: [],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css',
})
export class FooterComponent  {
  @Input() siteTitle: string = '';
  @Input() siteSubTitle: string = '';
}
