import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-classic-flap',
  templateUrl: './classic-flap.component.html',
  styleUrls: ['./classic-flap.component.sass']
})
export class ClassicFlapComponent implements OnInit {
  products: Entry<any>[];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getProductsByCategoryName('13a6BP1pNbd2wmT8aFeJAt').then(result =>{
      this.products = result;
    });
  }
}
