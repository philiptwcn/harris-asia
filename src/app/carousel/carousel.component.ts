import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ContentfulService } from '../services/contentful.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Entry } from 'contentful';
import Swiper from 'swiper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
})

export class CarouselComponent implements OnInit, AfterViewInit {
  product: Entry<any>;
  mySwiper: Swiper;

  constructor(
    private ContentfulService: ContentfulService,
    private route: ActivatedRoute,
    private elementRef: ElementRef,
  ) {}

  ngOnInit() {
    this.route.paramMap
    .pipe(switchMap((params: ParamMap) => this.ContentfulService.getProduct(params.get('slug'))))
    .subscribe(product => this.product = product);
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper(this.elementRef.nativeElement.querySelector('.swiper-container'), {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    // Now you can use all slider methods like
    this.mySwiper.navigation.update();
  }

}
