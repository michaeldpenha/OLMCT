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
  public communties : Community[] = [];
  constructor(private _contentfulService : ContentfulService, private _util : UtilService) { }

  ngOnInit() {
    this._fetchHero();
    this._fetchCommunityData();
  }

  private _fetchHero(){
    this._contentfulService.getAssestsById(environment.communtiesImageKey).then((res) => {
        this.community.push(this._util.assetDestructuring(res))
    });
  }

  private _fetchCommunityData(){
    this._contentfulService.getCommunities().then((res) => {
      res.forEach((el : any) => {
        el.contactPerson = el.contactPerson.fields;
        el.contactPerson.image = el.contactPerson.image.fields ? el.contactPerson.image.fields : el.contactPerson.image;
      });
      
      this.communties = res.map((el:any) => {
        const {title ,description, contactPerson : {name , mobileNumber, image}} = el;
        const imageUrl = image && image.file ? `http://${image.file.url}` : '';
        return {
          title ,
          description,
          image: imageUrl,
          name,
          phoneNumber: mobileNumber
        }
      });
    });
  }
}
