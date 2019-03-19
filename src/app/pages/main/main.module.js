'use strict';

import MainComponent from './main.component';

const mainPageModule = angular.module('main-module', [
    'ui.router'
])
    .config($urlRouterProvider => {
        'ngInject';

        $urlRouterProvider.otherwise('/');
<<<<<<< Updated upstream

        $stateProvider
            .state('main', {
                url: '/',
                component: 'main'
            });
=======
>>>>>>> Stashed changes
    })
    .component('main', new MainComponent());

export default mainPageModule;
