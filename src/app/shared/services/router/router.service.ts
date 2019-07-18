import { UtilService } from './../../utils/utilService';
import { Injectable } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
import { MenuLink } from '../../models/menuLink';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  private webTitle : string = 'Our Lady Of Mount Carmel';
  constructor(private _router: Router, private _utils: UtilService) { 
    
  }

  subscribeRouterChange(){
    this.updatePageTitle(window.location.pathname);
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const { urlAfterRedirects } = event;
        this.updatePageTitle(urlAfterRedirects);
      }
    }); 
  }

  updatePageTitle (url : string) {
    const menuLinks : MenuLink[] = this._utils.getNavLinks();
    const title = document.getElementsByTagName('title')[0];
    
    if(menuLinks){
      const selectedMenu = menuLinks.find((menu : MenuLink, i: number) => {
        const { slug } = menu;
        const urlSplit = url.split('/')[1];
        return urlSplit ? slug.includes(urlSplit) : false;
      });

      title.innerHTML = `${selectedMenu ? selectedMenu.name : 'Home'} | ${this.webTitle}`;
    }

    (<any>window).ga('set', 'page', url);
    (<any>window).ga('send', 'pageview');
  }

  
}
