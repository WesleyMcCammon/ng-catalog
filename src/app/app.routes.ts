import { Routes } from '@angular/router';
import { HomeComponent } from './component/home-component/home-component';
import { CatalogComponent } from './component/catalog-component/catalog-component';
import { CategoryComponent } from './component/category-component/category-component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'catalog', component: CatalogComponent },
    { path: 'category', component: CategoryComponent }
];
