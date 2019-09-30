import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Entry } from 'contentful';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {
  product: Entry<any>;

  constructor(
    private ContentfulService: ContentfulService,
    private route: ActivatedRoute,
    private cartService: CartService,
  ) {}

  ngOnInit() {
    this.route.paramMap
    .pipe(switchMap((params: ParamMap) => this.ContentfulService.getProduct(params.get('slug'))))
    .subscribe(product => this.product = product);
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
}
