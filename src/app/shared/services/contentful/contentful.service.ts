import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

import { environment } from './../../../../environments/environment';

const {contentful} = environment;

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient = createClient({
    space: contentful.space,
    accessToken: contentful.accessToken
  });
  constructor() { }

  getMenuLinks(query?: object): Promise<[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: contentful.contentTypeIds.links
    }, query))
    .then(res => this._prepareResponse(res.items));
  }

  getFeatureImages(query?: object) : Promise<[]>{
    return this.cdaClient.getEntries(Object.assign({
      content_type: contentful.contentTypeIds.features
    }, query))
    .then(res => this._prepareResponse(res.items));
  }

  getMembers(query?:object) : Promise<[]>{
    return this.cdaClient.getEntries(Object.assign({
      content_type: contentful.contentTypeIds.members
    }, query))
    .then(res => this._prepareResponse(res.items));
  }

  getArticles(query?:object) : Promise<[]>{
    return this.cdaClient.getEntries(Object.assign({
      content_type: contentful.contentTypeIds.articles
    }, query))
    .then(res => this._prepareResponse(res.items));
  }

  getSetUp(query?:object) : Promise<[]>{
    return this.cdaClient.getEntries(Object.assign({
      content_type: contentful.contentTypeIds.setup
    }, query))
    .then(res => this._prepareResponse(res.items));
  }

  getAssestsById(id : string) {
    return this.cdaClient.getAsset(id)
    .then(res => res.fields);
  }

  getEvents(query?:object) : Promise<[]>{
    return this.cdaClient.getEntries(Object.assign({
      content_type: contentful.contentTypeIds.events
    }, query))
    .then(res => this._prepareResponse(res.items));
  }

  private _prepareResponse = (items) => {
    return items.map(entry => entry.fields);
  }
}
