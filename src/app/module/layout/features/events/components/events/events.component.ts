import { environment } from './../../../../../../../environments/environment';
import { UtilService } from './../../../../../../shared/utils/utilService';
import { Carousel } from './../../../../../../shared/models/carousel';
import { ContentfulService } from './../../../../../../shared/services/contentful/contentful.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EventsComponent implements OnInit {
  public eventsImage : Carousel[] = [];
  public events : any[] = [];
  public autoCarousel : boolean = true;
  public listCls: string = 'listCls';
  constructor(private _contentfulService : ContentfulService, private _util : UtilService) {
  
  }

  ngOnInit() {
    this._fetchEvents();
  }

  private _fetchEvents(){
    this._contentfulService.getEvents({
      order: '-fields.date'
    }).then((res) => {
      res.forEach((el : any) => {
        const {title , logline, image : {fields : {file : url}}} = el;
        const imageURL = `https:${url.url}`;
        const {img , srcset, src} = this._util.imageDestructring(imageURL,'1920');
        this.events.push({
          title,
          logline,
          img,
          srcset,
          src
        })
      })
    });
  }
}
