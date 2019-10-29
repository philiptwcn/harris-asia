import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-crossbody',
  templateUrl: './crossbody.component.html',
  styleUrls: ['./crossbody.component.sass']
})
export class CrossbodyComponent implements OnInit {
  products: Entry<any>[];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getProductsByCategoryName('4TsFIR0WQpHNHwfODKXaCC')
    .then(products => this.products = products);
  }
}
