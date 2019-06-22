import { Component, OnInit, Input } from '@angular/core';
import { Carousel } from '../../../models/carousel';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.less']
})
export class ImageComponent implements OnInit {
  @Input() feature : Carousel;
  constructor() { }

  ngOnInit() {
  }

}
