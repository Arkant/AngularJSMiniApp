'use strict';

import MainComponent from './main.component';

const mainPageModule = angular.module('main-module', [
    'ui.router'
])
    .config($urlRouterProvider => {
        'ngInject';

        $urlRouterProvider.otherwise('/');
    })
    .component('main', new MainComponent());

export default mainPageModule;
