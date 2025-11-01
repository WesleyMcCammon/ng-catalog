import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../service/utility-service';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent implements OnInit {
  pageTitle: string = 'Affiliate Sites';
  activeLink: string = '';

  constructor(private utilityService: UtilityService) {}

  ngOnInit(): void {
    this.utilityService.pageChangeEventEmitter.subscribe((name: string) => {
      this.activeLink = name;
    });    
  }
  public setActive($event: any): void {
    const splitLink = $event.srcElement.href.split('/');
    this.activeLink = splitLink[splitLink.length -1];
    this.utilityService.setPage(this.activeLink);
  }
}
