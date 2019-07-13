import { Component, OnInit, Input } from '@angular/core';
import { Community } from '../../models/community';

@Component({
  selector: 'app-community-card',
  templateUrl: './community-card.component.html',
  styleUrls: ['./community-card.component.less']
})
export class CommunityCardComponent implements OnInit {
  @Input() item : Community;
  constructor() { }

  ngOnInit() {
  }

}
