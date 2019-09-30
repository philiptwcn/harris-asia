import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  items;
  product: Entry<any>;

  constructor(
    private ContentfulService: ContentfulService,
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  removeItem(product) {
    window.alert('Your product has been remove!');
    this.cartService.removeItem(product);
  }

}
