'use strict';

export default function (app) {
  app
    .service('localStorageService', function ($localStorage) {
        'ngInject';

        this.setCoordinates = ({ lat, long }) => {
            $localStorage.coordinates = {lat, long};
        };

        this.getCoordinates = () => $localStorage.coordinates;
    });
}
