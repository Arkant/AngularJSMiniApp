'use strict';

import HomeController from './home.controller';
import './home.scss';

const homePageModule = angular.module('home-module', [])
homePageModule.controller('HomeController', HomeController);

export default homePageModule;
