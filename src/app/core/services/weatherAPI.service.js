'use strict';

export default function (app) {
  app
    .service('weatherAPIService', function ($http, weatherAPIconstants) {
        'ngInject';

        const key = weatherAPIconstants.APIkey;

        this.getForecast = coords => $http({
          method: 'GET',
          url: `http://api.weatherbit.io/v2.0/current?lat=${coords.lat}&lon=${coords.long}&key=${key}`
        })
        .then(({ data: { data } }) => data)
        .then(([ weatherData ]) => {
          const {
            temp: temp, 
            app_temp: feelLike, 
            wind_spd: wind, 
            wind_cdir_full: dir, 
            city_name: city, 
            country_code: country
          } = weatherData;

          return {temp, feelLike, wind, dir, city, country};
        })
    });
}
