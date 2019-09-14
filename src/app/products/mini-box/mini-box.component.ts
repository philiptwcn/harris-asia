import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-mini-box',
  templateUrl: './mini-box.component.html',
  styleUrls: ['./mini-box.component.sass']
})
export class MiniBoxComponent implements OnInit {
  products: Entry<any>[];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getProductsByCategoryName('1YW8mI7YBNXJxpbz9y5iXY').then(result =>{
      this.products = result;
    });
  }
}
