import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  id: any;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    // get item id from route params
    this.id = this.route.snapshot.params.id;
    this.getProduct();
  }

  getProduct() {
    this.productService.getProductById(this.id).subscribe((res: Product) => {
      this.product = res;
      console.log(this.product);
    });
  }
}
