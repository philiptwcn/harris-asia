import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges  } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit, OnChanges {

  items;
  product: Entry<any>;

  totalValue = 0;

  constructor(
    private ContentfulService: ContentfulService,
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  removeItem(product) {
    window.alert('Your product has been remove!');
    this.cartService.removeItem(product);
  }

  get totalPrice() {
    return this.items.reduce((p, c) => {
        return p + c.fields.price;
    }, 0);
  }

}
