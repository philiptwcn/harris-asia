import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ContentfulService } from '../services/contentful.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Entry } from 'contentful';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
})

export class CarouselComponent implements OnInit {
  product: Entry<any>;

  constructor(
    private ContentfulService: ContentfulService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.paramMap
    .pipe(switchMap((params: ParamMap) => this.ContentfulService.getProduct(params.get('slug'))))
    .subscribe(product => this.product = product);
  }


}
