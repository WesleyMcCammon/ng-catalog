import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../service/utility-service';
import { Site } from '../../model/site-model';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent implements OnInit {
  siteTitle: string = 'No title';
  activeLink: string = '';

  constructor(private utilityService: UtilityService) {}

  ngOnInit(): void {
    this.utilityService.pageChangeEventEmitter.subscribe((name: string) => {
      this.activeLink = name;
    });   

    this.utilityService.getSiteInfo().subscribe((site: Site) => {
      this.siteTitle = site.title;
    }); 
  }
  public setActive($event: any): void {
    const splitLink = $event.srcElement.href.split('/');
    this.activeLink = splitLink[splitLink.length -1];
    this.utilityService.setPage(this.activeLink);
  }
}
