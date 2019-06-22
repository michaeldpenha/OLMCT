import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContentfulService } from '../../services/contentful/contentful.service';
import { MenuLink } from '../../models/menuLink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  public menuLinks: MenuLink[];
  public homePage : string = "/"; 
  public iconClass : string = "iconCls";
  public ariaLabel : string = "Our Lady Of Mount Carmel";
  constructor(private _contentfulService:ContentfulService) { }

  ngOnInit() {
    this._populateMenuItems()
  }

  private _populateMenuItems = () => {
    this._contentfulService.getMenuLinks().then((res) => {
      this.menuLinks = res;
    })
  }
}