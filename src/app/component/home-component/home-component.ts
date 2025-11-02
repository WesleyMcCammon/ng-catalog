import { Component, OnInit } from '@angular/core';
import { ShopByCategoryComponent } from "../shop-by-category-component/shop-by-category-component";
import { SplashPageComponent } from "../splash-page-component/splash-page-component";
import { TrendingNowComponent } from "../trending-now-component/trending-now-component";
import { UtilityService } from '../../service/utility-service';
import { Site } from '../../model/site-model';

@Component({
  selector: 'app-home-component',
  imports: [ShopByCategoryComponent, SplashPageComponent, TrendingNowComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit {
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
