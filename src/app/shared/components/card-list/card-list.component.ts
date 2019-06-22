import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CardListComponent implements OnInit {
  @Input() listCls: string = '';
  @Input() cardList: Card[];
  constructor() { }

  ngOnInit() {
  }

}
