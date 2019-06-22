import { Carousel } from './../../../../../../shared/models/carousel';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContentfulService } from '../../../../../../shared/services/contentful/contentful.service';
import { UtilService } from '../../../../../../shared/utils/utilService';


interface contact {
  mobile : string,
  email : string,
  address : string
}

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ContactusComponent implements OnInit {
  public lat: number = 18.7331983;
  public lng: number = 73.6613254;
  public zoom: number = 17;
  public contacts : contact = {
    mobile : '',
    email : '',
    address:''
  };
  public mailTo : string = '';
  public carousel : Carousel[] = []
  public autoCarousel : boolean = false;
  public contactus : string = 'contactus';
  constructor(private _contentfulService: ContentfulService,private _util: UtilService) { }

  ngOnInit() {
    this._getAssests();
    this._fetchAnnouncements();
  }

  private _fetchAnnouncements() {
    this._contentfulService.getSetUp({
      'fields.slug[in]' : 'email,mobile,address',
    }).then((res : any[]) => {
      res.forEach((item) => {
        this.contacts[item.slug] = item.description;
      });

      this.mailTo = `mailto:${this.contacts['email']}`;
    });
  }

  private _getAssests (){
    this._contentfulService.getAssestsById('7BZevJCrBQi3cQRKNetIqd').then((res) => {
        this.carousel.push(this._util.assetDestructuring(res))
    })
  }

}
