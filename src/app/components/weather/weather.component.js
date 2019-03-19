'use strict';

import weatherTpl from './weather.html';
import WeatherController from './weather.controller';

export default class WeatherComponent {
    constructor() {
        this.templateUrl = weatherTpl;
        this.controller = WeatherController;
        this.controllerAs = 'weatherCtrl';
    }
}