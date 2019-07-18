import { Articles } from './../models/articles';
import { Injectable } from '@angular/core';
import { Carousel } from '../models/carousel';
import { MenuLink } from '../models/menuLink';

@Injectable()
export class UtilService {
    private _imgSizes : string[] = ['768 768w','1024 1024w','1280 1280w','1440 1440w'];
    private _srcSize : string = '768';
    private _menuLinks: MenuLink[];
    /**
     * srcSetCreation
     */
    public srcSetCreation (img : string) {
        return this._imgSizes.reduce((prevVal, nextVal) => {
            return `${prevVal} ${img}/w=${nextVal}`;
        },'');
    }

    /**
     * srcDefaultCreation
     */
    public srcDefaultCreation(img : string) {
        return `${img}/w=${this._srcSize}`;
    }

    /**
     * articleDestructuring
     */
    public articleDestructuring(res : any[]) : Articles {
      const {title , description, image : {fields : {file : url}} } = res[0];
      const imageURL = `https:${url.url}`;
      const {img , srcset, src} = this.imageDestructring(imageURL,'1920');
      return {
          title,
          description,
          img ,
          srcset,
          src
      };
    }

    /**
     * assetDestructuring
     */
    public assetDestructuring(res : any, w : string) : Carousel {
        const {title , file : {url}} = res;
        const image = `https:${url}`;
        const {img , srcset, src} = this.imageDestructring(image,w || '300');
        return {
          title,
          img,
          srcset,
          src
        }
    }

    public imageDestructring (img : string,width : string)  {
        return{
            img : `${img}?w=${width}`,
            srcset: this.srcSetCreation(img),
            src: this.srcDefaultCreation(img)
        }
    }
    /**
     * dateFormat
     */
    public dateFormat(date : string) : string {
        const dateObj = new Date(date);
        const month = this.getMonth(dateObj.getMonth());
        const dateStr = dateObj.getDate();
        const year = dateObj.getFullYear();

        return `${month} ${dateStr}, ${year}`;
    }

    /**
     * getMonth
     */
    public getMonth(month : number) : string {
        let result: string='';
        switch(month){
            case 0 : result = 'Jan'; break; 
            case 1 : result='Feb'; break;
            case 2 : result= 'Mar';break;
            case 3 : result = 'Apr';break;
            case 4 : result = 'May'; break;
            case 5 : result = 'Jun'; break; 
            case 6 : result='July'; break;
            case 7 : result= 'Aug';break;
            case 8 : result = 'Sep';break;
            case 9 : result = 'Oct'; break;
            case 10 : result = 'Nov'; break; 
            case 11 : result='Dec'; break;
        }

        return result;
    }

    public getNavLinks = () : MenuLink[] => {
        return this._menuLinks;
      }
    
      public setNavlinks = (links : MenuLink[]) => {
        this._menuLinks = links;
      }
}