import { Component, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';
import { AuthService } from '../services/auth.service';
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
    public auth: AuthService,
    private cartService: CartService,
  ) { }

  isModalActive = false;

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  ngOnChanges() {
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

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }

}
