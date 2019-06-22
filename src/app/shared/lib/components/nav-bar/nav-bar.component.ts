import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MenuLink } from '../../../models/menuLink';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})

export class NavBarComponent implements OnInit {
  @Input() links : MenuLink[];
  @Input() iconClassName : string;
  @Input() iconAriaLabel : string = "Icon";
  @Input() activeNav : string = "";

  public homePage: string = "/";
  
  constructor(private _router : Router) { }

  ngOnInit() {
    
  }

  public checkActiveItem = (item : MenuLink) => {
    return this._router.url.indexOf(item.slug) > -1;
  }

  public populateSlug = (item : MenuLink) => {
    return `/${item.slug}`;
  }
}
