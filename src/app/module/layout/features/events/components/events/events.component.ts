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
  public autoCarousel : boolean = false;
  public listCls: string = 'listCls';
  constructor(private _contentfulService : ContentfulService, private _util : UtilService) {
  
  }

  ngOnInit() {
    this._fetchHero()
    this._fetchEvents();
  }

  private _fetchEvents(){
    this._contentfulService.getEvents({
      order: '-fields.date'
    }).then((res) => {
      console.log(res)
      this.events = res;
    });
  }

  private _fetchHero(){
    this._contentfulService.getAssestsById('4huor7fVOJn86PcCLbu9FJ').then((res) => {
        this.eventsImage.push(this._util.assetDestructuring(res))
    });
  }

  public prepareCardData(images : any[]) {
    const result : any[] = [];

    images.forEach((item) =>{
      const {fields : {title, file : {url}}} = item;
      const image = `http://${url}`;
      const {img, src, srcset} = this._util.imageDestructring(image,'300')
      result.push({
        img, src, srcset, title
      })
    });

    return result;
  }
  public dateFormat(date :string){
    return this._util.dateFormat(date);
  }
}
