import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CategoryDetailComponent } from './pages/category-detail/category-detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { ProductCategoriesComponent } from './pages/product-categories/product-categories.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ResourcesComponent } from './pages/resources/resources.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'categories', component: ProductCategoriesComponent },
  { path: 'categories/:slug', component: CategoryDetailComponent },
  { path: 'products/:slug', component: ProductDetailComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: '**', redirectTo: '' },
];
