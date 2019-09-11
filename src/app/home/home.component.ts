import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  video: Entry<any>[];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getVideo()
    .then(video => this.video = video);
  }

}
