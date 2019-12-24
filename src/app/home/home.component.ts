import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Asset, Entry } from 'contentful';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  asset: Asset;
  homeHeroCarousel: Entry<any>[];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.cdaClient.getAsset('5QOKNZjkrPgyAmSGB3nMXo')
    .then(asset => this.asset = asset);
    this.contentfulService.gethomeHeroCarousel()
    .then(homeHeroCarousel => this.homeHeroCarousel = homeHeroCarousel);
  }

}
