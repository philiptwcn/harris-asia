import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-mini-box',
  templateUrl: './mini-box.component.html',
  styleUrls: ['./mini-box.component.sass']
})
export class MiniBoxComponent implements OnInit {
  categories: Entry<any>[];
  productsForCategories: {} = {};

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getCategories()
    .then(categories => {
      this.categories = categories;

      return Promise.all(this.categories.map(
        category => this.contentfulService.getProducts({
          'fields.categories.sys.id': category.sys.id
        })
      ))
    })
    .then(productListings => {
      this.categories.forEach((cat, i) => {
        this.productsForCategories[cat.sys.id] = productListings[4];
      });
    })
  }
}
