import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-handbags',
  templateUrl: './handbags.component.html',
  styleUrls: ['./handbags.component.sass']
})
export class HandbagsComponent implements OnInit {
  products: Entry<any>[];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getProducts()
    .then(products => this.products = products);
  }

}
