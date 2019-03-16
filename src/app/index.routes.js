'use strict';


import profileTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/profile/profile.html';
import editProfileTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/edit-profile/edit-profile.html';
import transactionsListTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/transactions-list/transactions-list.html';
import signInTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/sign-in/sign-in.html';

function routeConfig($urlRouterProvider, $stateProvider, resolverProvider) {
  'ngInject';


    $stateProvider
        .state('profile', {
          url: '/profile',
          templateUrl: profileTemplate,
          resolve: {
            asyncPreloading: resolverProvider.profilePagePrealoading
          }
        })
        .state('editProfile', {
          url: '/editProfile',
          templateUrl: editProfileTemplate,
          controller: 'editProfileController',
          controllerAs: 'edProf',
          resolve: {
            asyncPreloading: resolverProvider.editProfilePagePrealoading
          }
        })
        .state('transactionsList', {
          url: '/transactionsList',
          templateUrl: transactionsListTemplate,
          controller: 'transactionsListController',
          resolve: {
            asyncPreloading: resolverProvider.transactionsListPagePreloading
          }
        })
        .state('sign-in', {
          url: '/sign-in',
          templateUrl: signInTemplate,
          controller: 'SignInController',
          controllerAs: 'signInCtrl',
          resolve: {
            asyncPreloading: resolverProvider.signInPagePreloading
          }
        })

  $urlRouterProvider.otherwise('/');

}

export default angular
  .module('index.routes', [])
    .config(routeConfig);

