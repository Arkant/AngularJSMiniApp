'use strict';

import WeatherComponent from './weather.component';
import './weather.scss';

const weatherModule = angular.module('weather-module', []);

weatherModule
    .component('weatherComponent', new WeatherComponent());

export default weatherModule;
