// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlBaseServicio : 'https://ansv.gov.co/rest/escuela',
  authorization: 'Basic YWRtaW4ucmVzdDAxOm5nJWgmLUU0a1gkRA==',
  baseUrl : 'https://ansv.gov.co/',

  urlPqrsd : 'https://sgd.ansv.gov.co/Orfeo7//Modulos/restn/index.php?',
  authorizationPqrsd: 'Basic YWRtb246b3JmZW9hbnQ=',
  hostHeader: '172.23.0.33'
};

// 172.23.0.33
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
