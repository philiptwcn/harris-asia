import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Asset } from 'contentful';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  asset: Asset;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.cdaClient.getAsset('TWUMUnzt6MdPVoTNaKjMS')
    .then(asset => this.asset = asset);
  }

}
