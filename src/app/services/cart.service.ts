import { Injectable } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  products: Entry<any>[];

  constructor(private contentfulService: ContentfulService) { }

  addToCart(products) {
    this.items.push(products);
  }

  removeItem(products) {
    this.items.splice(products);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
