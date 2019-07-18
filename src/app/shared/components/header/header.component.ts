import { RouterService } from './../../services/router/router.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContentfulService } from '../../services/contentful/contentful.service';
import { MenuLink } from '../../models/menuLink';
import { UtilService } from '../../utils/utilService';

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
  constructor(private _contentfulService:ContentfulService, private _routerService : RouterService, private _utils : UtilService) { }

  ngOnInit() {
    this._populateMenuItems()
  }

  private _populateMenuItems = () => {
    this._contentfulService.getMenuLinks({
      order: 'fields.order'
    }).then((res) => {
      this._utils.setNavlinks(res);
      this.menuLinks = this._utils.getNavLinks();
      this._routerService.subscribeRouterChange();
    })
  }
}