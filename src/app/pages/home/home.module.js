'use strict';

import HomeComponent from './home.component';
import './home.scss';

const homePageModule = angular.module('home-module', [
  'ui.router'
])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/home',
        name: 'home',
        component: 'home'
      });
  })
  .component('home', new HomeComponent());

export default homePageModule;
