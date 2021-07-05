import { Category } from './../models/category';
import { CategoryService } from './../services/category.service';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1.5,
    spaceBetween: 10,
  };

  products: Product[];
  categories: Category[];
  filteredCategoryList: any;
  filterCount: any;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
  }

  getProducts() {
    return this.productService.getProducts().subscribe((res: Product[]) => {
      this.products = res;
      // console.log(this.products);
    });
  }

  getCategories() {
    return this.categoryService.getCategories().subscribe((res: Category[]) => {
      this.categories = res;
      // console.log(this.categories);
    });
  }

}
