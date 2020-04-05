import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../../services/contentful/contentful.service';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.less']
})
export class TickerComponent implements OnInit {
  public ticker = '';
  public link = '';

  constructor(private _contentfulService: ContentfulService) { }

  ngOnInit() {
    this._fetchTicker();
    this._fetchYoutube();
  }

  _fetchTicker() {
    this._contentfulService.getArticles({
      'fields.slug' : 'ticker'
    }).then((res: any[]) => {
      this.ticker = res[0].description;
    });
  }

  _fetchYoutube() {
    this._contentfulService.getSetUp({
      'fields.slug' : 'online-mass-link',
    }).then((res: any[]) => {
      this.link = res[0].description;
    });
  }

}
