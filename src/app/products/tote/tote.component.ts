import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-tote',
  templateUrl: './tote.component.html',
  styleUrls: ['./tote.component.sass']
})
export class ToteComponent implements OnInit {
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
        this.productsForCategories[cat.sys.id] = productListings[5];
      });
    })
  }
}
