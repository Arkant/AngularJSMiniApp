'use strict';


import profileTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/profile/profile.html';
import editProfileTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/edit-profile/edit-profile.html';
import signInTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/sign-in/sign-in.html';
import signUpTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/sign-up/sign-up.html';
import adminTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/admin/admin.html';
import converterTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/currency-converter/converter.html';
import homeTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/home/home.html';

function routeConfig($urlRouterProvider, $stateProvider, roles) {
  'ngInject';

    $stateProvider
        .state('profile', {
          url: '/profile',
          templateUrl: profileTemplate,
          resolve: {
            asyncPreloading: resolver => resolver.profilePagePrealoading()
          },
          data: {
            role: [roles.USER, roles.ADMIN]
          }
        })
        .state('editProfile', {
          url: '/editProfile',
          templateUrl: editProfileTemplate,
          controller: 'editProfileController',
          controllerAs: 'edProf',
          resolve: {
            asyncPreloading: resolver => resolver.editProfilePagePrealoading()
          },
          data: {
            role: [roles.USER, roles.ADMIN]
          }
        })
        .state('sign-in', {
          url: '/sign-in',
          templateUrl: signInTemplate,
          controller: 'SignInController',
          controllerAs: 'signInCtrl',
          resolve: {
            asyncPreloading: resolver => resolver.signInPagePreloading()
          },
          data: {
            role: []
          }
        })
        .state('sign-up', {
          url: '/sign-up',
          templateUrl: signUpTemplate,
          controller: 'SignUpController',
          controllerAs: 'su',
          resolve: {
            asyncPreloading: resolver => resolver.signUpPagePreloading()
          },
          data: {
            role: []
          }
        })
        .state('admin', {
          url: '/admin',
          templateUrl: adminTemplate,
          controller: 'AdminController',
          controllerAs: 'admCont',
          resolve: {
            asyncGetUsersFromFirebase: resolver => resolver.getUsersFromFirebase(),
            asyncPreloading: resolver => resolver.adminPagePreloading(),
          },
          data: {
            role: [roles.ADMIN]
          }
        })
        .state('converter', {
          url: '/converter',
          templateUrl: converterTemplate,
          controller: 'ConverterController',
          controllerAs: 'cc',
          resolve: {
            asyncPreloading: resolver => resolver.converterPagePreloading(),
          },
          data: {
            role: [roles.USER, roles.ADMIN]
          }
        })
        .state('home', {
          url: '/home',
          templateUrl: homeTemplate,
          controller: 'HomeController',
          controllerAs: 'homeCtrl',
          resolve: {
            asyncPreloading: resolver => resolver.homePagePreloading()
          },
          data: {
            role: [roles.USER, roles.ADMIN]
          }
        })

  $urlRouterProvider.otherwise('/sign-in');

}

export default angular
  .module('index.routes', [])
    .config(routeConfig);
