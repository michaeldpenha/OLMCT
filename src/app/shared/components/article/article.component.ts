import { Articles } from './../../models/articles';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent implements OnInit {
  @Input() article : Articles[];
  @Input() autoCarousel : boolean = false;
  @Input() section: string ='';
  constructor() { }

  ngOnInit() {
  }

}
