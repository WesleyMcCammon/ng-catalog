import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from "./component/header-component/header-component";
import { FooterComponent } from "./component/footer-component/footer-component";
import { UtilityService } from './service/utility-service';
import { Site } from './model/site-model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgbModule, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  protected title = 'ng-catalog';
  siteTitle: string = '';
  siteSubTitle: string = '';
  
  constructor(private utilityService: UtilityService) {}

  ngOnInit(): void {
    this.utilityService.getSiteInfo().subscribe((site: Site) => {
      this.siteTitle = site.title;
      this.siteSubTitle = site.subTitle;
    });
  }
}
