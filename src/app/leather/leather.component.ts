import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Asset } from 'contentful';

@Component({
  selector: 'app-leather',
  templateUrl: './leather.component.html',
  styleUrls: ['./leather.component.sass']
})
export class LeatherComponent implements OnInit {
  asset: Asset;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.cdaClient.getAsset('5QOKNZjkrPgyAmSGB3nMXo')
    .then(asset => this.asset = asset);
  }

}
