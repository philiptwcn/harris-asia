import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-tote',
  templateUrl: './tote.component.html',
  styleUrls: ['./tote.component.sass']
})
export class ToteComponent implements OnInit {
  products: Entry<any>[];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getProductsByCategoryName('6pVVERCdgC87CXudZzx6cX').then(result =>{
      this.products = result;
    });
  }
}
