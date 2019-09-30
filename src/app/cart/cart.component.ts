import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  items;

  constructor(
    private ContentfulService: ContentfulService,
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}
