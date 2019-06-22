import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Carousel } from '../../../../../../shared/models/carousel';
import { ContentfulService } from '../../../../../../shared/services/contentful/contentful.service';
import { UtilService } from '../../../../../../shared/utils/utilService';
import { Card } from '../../../../../../shared/models/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  public features : Carousel[] = [];
  public cardList: Card[] = [];
  public htmlContent : string = '';
  constructor(private _contentfulService: ContentfulService, private _util: UtilService) { }

  ngOnInit() {
    this._fetchFeatures();
    this._fetchMembers();
    this._fetchArticle();
  }

  private _fetchFeatures() {
    this._contentfulService.getFeatureImages().then((res) => {
      res.forEach((el : any) => {
        const {title , logline, image : {fields : {file : url}}} = el;
        const imageURL = `https:${url.url}`;
        const {img , srcset, src} = this._util.imageDestructring(imageURL,'1920');
        this.features.push({
          title,
          logline,
          img,
          srcset,
          src
        })
      })
    });
  }

  private _fetchMembers() {
    this._contentfulService.getMembers().then((res) => {
      res.forEach((el : any) => {
        const {tItle , logLine, message, image : {fields : {file : url}}} = el;
        const imageURL = `https:${url.url}`;
        const {img , srcset, src} = this._util.imageDestructring(imageURL,'300');
        this.cardList.push({
          title : tItle,
          logline : logLine,
          description : message,
          img ,
          srcset,
          src
        })
      })
    });
  }

  private _fetchArticle() {
    // 'fields.<field_name>[in]': 'accessories,flowers'
    this._contentfulService.getArticles({
      'fields.slug' : 'home'
    }).then((res : any[]) => {
      this.htmlContent = res[0].description;
    });
  }
}