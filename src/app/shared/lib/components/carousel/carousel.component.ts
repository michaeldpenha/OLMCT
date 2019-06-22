import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Carousel } from '../../../models/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {
  @Input() features: Carousel[];
  @Input() auto : boolean = true;
  @Input() intervalsSeconds : number = 10000;
  @Input() cyclic : boolean = true;

  public activeItem : number = 0;
  constructor() { }

  ngOnInit() {
    this._intializeComponent();
  }

  private _intializeComponent = () => {
    if(this.auto){
      setInterval(()=>{
        this.activeItem = this.activeItem >= this.features.length-1 ? 0 : this.activeItem + 1;
      }, this.intervalsSeconds)
    }
  }
}
