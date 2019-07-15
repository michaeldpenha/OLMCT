import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Card } from '../../../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
  @Input() item : Card;
  @Input() cardCls: string = '';
  @Input() flipSupport: boolean = false;
  @Input() showImage: boolean = false;
  public goInfo : boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
