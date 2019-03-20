'use strict';

import WeatherComponent from './weather.component';
import './weather.scss';
import config from '../../../../config';

const weatherModule = angular.module('weather-module', []);

weatherModule
    .config(weatherAPIServiceProvider => {
        'ngInject';

        weatherAPIServiceProvider.setKey(config.weatherAPIkey);
    })
    .component('weatherComponent', new WeatherComponent());

export default weatherModule;
