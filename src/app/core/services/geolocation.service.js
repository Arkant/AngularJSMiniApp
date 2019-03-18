'use strict';

export default function (app) {
  app
    .service('geolocationService', function (geolocation) {
        'ngInject';

        this.getCoordinates = () => geolocation.getLocation().then(data => ({
            lat: data.coords.latitude,
            long: data.coords.longitude
        }))
    });
}
