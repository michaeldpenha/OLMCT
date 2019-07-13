// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mapAPIKey: 'AIzaSyA9sPABuehbSFUJEht3b4Ro0Apy1awnysk',
  eventImageKey: '4huor7fVOJn86PcCLbu9FJ',
  communtiesImageKey: '4v4xr00RdctXlYgxQw0CGM',
  contentful: {
    space: 'ofbadd9agszw',
    accessToken: 'VIBvxVgl0hQWmv86HTWZR_cZNgbzG2jrpEMUqcycY1k',

    contentTypeIds: {
      links: 'menuLinks',
      features: 'features',
      members: 'members',
      articles: 'articles',
      setup: 'setup',
      events:'events',
      communties: 'communities'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
