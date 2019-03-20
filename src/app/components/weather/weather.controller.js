'use strict';

export default class WeatherController {
    constructor(weatherAPIService, geolocationService, localStorageService) {
        'ngInject';
        
        this.weatherAPIService = weatherAPIService;
        this.geolocationService = geolocationService;
        this.localStorageService = localStorageService;

        this.weatherData = {};
        this.selectedLocation = null;
    }

    getForecastForSavedLocation() {
      const coords = this.localStorageService.getCoordinates();
      
      if (coords) {
        this.weatherAPIService.getForecast(coords)
        .then(data => {
          this.localStorageService.setCoordinates(coords);
          this.weatherData = data;
        });
      }
    }

    getForecastForSelected() {
      const location = this.autocomplete.details.geometry.location;

      const coords = {
        lat: location.lat(),
        long: location.lng()
      }
      
      this.weatherAPIService.getForecast(coords)
        .then(data => {
          this.localStorageService.setCoordinates(coords);
          this.weatherData = data;
        });
    }

    getForecastForLocal() {
      this.geolocationService.getCoordinates()
        .then(coords => {
          this.localStorageService.setCoordinates(coords);
          return this.weatherAPIService.getForecast(coords)
        })
        .then(data => {
          this.selectedLocation = `${data.city}, ${data.country}`;
          this.weatherData = data;
        });
    }

    $onInit() {
        this.getForecastForSavedLocation();
    }
}