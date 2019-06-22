import { Component, OnInit } from '@angular/core';
import { Articles } from '../../../../../../shared/models/articles';
import { ContentfulService } from '../../../../../../shared/services/contentful/contentful.service';
import { UtilService } from '../../../../../../shared/utils/utilService';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.less']
})
export class AboutusComponent implements OnInit {
  public aboutus : Articles[]= [];
  public autoCarousel : boolean = false;
  public section : string = 'section';
  constructor(private _contentfulService: ContentfulService,private _util: UtilService) { }

  ngOnInit() {
    this._fetchAboutUs()
  }

  private _fetchAboutUs() {
    this._contentfulService.getArticles({
      'fields.slug' : 'about-us'
    }).then((res : any[]) => {
      this.aboutus.push(this._util.articleDestructuring(res));
    });
  }
}
// /about-us
