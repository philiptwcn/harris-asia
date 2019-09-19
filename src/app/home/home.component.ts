import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Asset } from 'contentful';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  asset: Asset;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.cdaClient.getAsset('5QOKNZjkrPgyAmSGB3nMXo')
    .then(asset => this.asset = asset);
  }

}
