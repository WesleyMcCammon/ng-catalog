import { Component } from '@angular/core';
import { ShopByCategoryComponent } from "../shop-by-category-component/shop-by-category-component";
import { SplashPageComponent } from "../splash-page-component/splash-page-component";
import { TrendingNowComponent } from "../trending-now-component/trending-now-component";

@Component({
  selector: 'app-home-component',
  imports: [ShopByCategoryComponent, SplashPageComponent, TrendingNowComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

}
