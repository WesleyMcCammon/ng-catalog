import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/category-model';
import { UtilityService } from '../../service/utility-service';

@Component({
  selector: 'app-shop-by-category-component',
  imports: [],
  templateUrl: './shop-by-category-component.html',
  styleUrl: './shop-by-category-component.css',
})
export class ShopByCategoryComponent implements OnInit {
  sectionTitle: string = 'Shop by Category';
  sectionSubTitle: string = 'Discover curated collections designed for your lifestyle';
  exploreCollectionText: string = 'Explore Collection';
  categories: Category[] = new Array<Category>();

  constructor(private utilityService: UtilityService) {}

  ngOnInit(): void {
    this.utilityService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }
}
