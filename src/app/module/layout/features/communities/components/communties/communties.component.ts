import { Card } from './../../../../../../shared/models/card';
import { environment } from './../../../../../../../environments/environment';
import { Carousel } from './../../../../../../shared/models/carousel';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContentfulService } from '../../../../../../shared/services/contentful/contentful.service';
import { UtilService } from '../../../../../../shared/utils/utilService';
import { Community } from '../../../../../../shared/models/community';

@Component({
  selector: 'app-communties',
  templateUrl: './communties.component.html',
  styleUrls: ['./communties.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CommuntiesComponent implements OnInit {
  public community: Carousel[] = [];
  public communties : Card[] = [];
  public showImage: boolean = false;
  public flipSupport: boolean = true
  constructor(private _contentfulService : ContentfulService, private _util : UtilService) { }

  ngOnInit() {
    this._fetchHero();
    this._fetchCommunityData();
  }

  private _fetchHero(){
    this._contentfulService.getAssestsById(environment.communtiesImageKey).then((res) => {
        this.community.push(this._util.assetDestructuring(res,'1920'))
    });
  }

  private _fetchCommunityData(){
    this._contentfulService.getCommunities({
      order: 'fields.order'
    }).then((res) => {
      this.communties = res.map((el:any) => {
        const {title ,description, members} = el;
        // const imageUrl = image && image.file ? `http://${image.file.url}` : '';
        return {
          title ,
          frontDescription:description,
          backDescription: members
        }
      });
    });
  }
}
