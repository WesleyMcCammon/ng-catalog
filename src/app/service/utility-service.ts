import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../model/category-model';
import { Site } from '../model/site-model';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  pageChangeEventEmitter: EventEmitter<string> = new EventEmitter<string>();
  //siteTitleChangeEventEmitter: EventEmitter<Site> = new EventEmitter<Site>();

  // public setSiteTitle(siteTitle: string, siteSubTitle: string) {
  //   this.siteTitleChangeEventEmitter.emit({title: siteTitle, subTitle: siteSubTitle});
  // }
  
  public setPage(name: string) {
    this.pageChangeEventEmitter.emit(name);
  }

  public getSiteInfo(): Observable<Site> {
    const site: Site = { title: 'My Affiliate Site', subTitle: ''};
    return of(site);
  }
  public getCategories():  Observable<Category[]> {
    const categories = new Array<Category>();

    categories.push({
      name: 'Electronics', 
      altImageText: 'Modern electronics collection featuring smartphones, tablets, and smart devices', 
      imageUrl: 'https://images.unsplash.com/photo-1628911771814-5d61388efbf7', description: 'Latest tech innovations'
    });
    categories.push({
      name: 'Fashion', 
      altImageText: 'Stylish fashion collection with contemporary clothing and accessories', 
      imageUrl: 'https://images.unsplash.com/photo-1582709489510-0da2069cd09d', 
      description: 'Trending styles & classics'
    });
    categories.push({
      name: 'Home & Living', 
      altImageText: 'Beautiful home decor setup with modern furniture and elegant accessories', 
      imageUrl: 'https://images.unsplash.com/photo-1633789638578-eef0da1dc063', 
      description: 'Transform your space'
    });
    categories.push({
      name: 'Sports & Fitness', 
      altImageText: 'Active lifestyle products including fitness equipment and sports gear', 
      imageUrl: 'https://images.unsplash.com/photo-1452374642972-d3e6ff303969', 
      description: 'Gear for active life'
    });

    return of(categories); 
  }
}