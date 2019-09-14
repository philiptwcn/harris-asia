import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-fotografica',
  templateUrl: './fotografica.component.html',
  styleUrls: ['./fotografica.component.sass']
})
export class FotograficaComponent implements OnInit {
  products: Entry<any>[];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getProductsByCategoryName('Xv8N9irXPPR2sLTf7ytIZ').then(result =>{
      this.products = result;
    });
  }
}
