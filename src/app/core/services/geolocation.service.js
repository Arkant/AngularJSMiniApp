'use strict';

export default function (app) {
  app
    .service('geolocationService', function (geolocation) {
        'ngInject';

        this.getCoordinates = () => geolocation.getLocation().then(({ coords }) => ({
            lat: coords.latitude,
            long: coords.longitude
        }))
    });
}
