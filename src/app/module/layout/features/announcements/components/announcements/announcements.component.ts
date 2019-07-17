import {ContentfulService } from './../../../../../../shared/services/contentful/contentful.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Articles } from '../../../../../../shared/models/articles';
import { UtilService } from '../../../../../../shared/utils/utilService';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class AnnouncementsComponent implements OnInit {

  public announcements : Articles[]= [];
  public autoCarousel : boolean = false;
  public section : string = 'section';
  constructor(private _contentfulService: ContentfulService,private _util: UtilService) { }

  ngOnInit() {
    this._fetchAnnouncements();
  }

  private _fetchAnnouncements() {
    this._contentfulService.getArticles({
      'fields.slug' : 'announcements'
    }).then((res : any[]) => {
      this.announcements.push(this._util.articleDestructuring(res));
    });
  }
}
