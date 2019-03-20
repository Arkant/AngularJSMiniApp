'use strict';

export default function (app) {
  app
    .service('resolver', function ($q, $ocLazyLoad, syncDataService) {
        'ngInject';

        this.profilePagePrealoading = () => {
            const deferred = $q.defer();
            require.ensure([], require => {
                const profileModule = require('../../pages/profile/profile.module');
                $ocLazyLoad.load({
                    name: profileModule.default.name,
                });
                deferred.resolve(profileModule.default.controller);
            });

            return deferred.promise;
        };

        this.editProfilePagePrealoading = () => {
            const deferred = $q.defer();
            require.ensure([], require => {
                const editProfileModule = require('../../pages/edit-profile/edit-profile.module');
                $ocLazyLoad.load({
                    name: editProfileModule.default.name,
                });
                deferred.resolve(editProfileModule.default.controller);
            });

            return deferred.promise;
        };

        this.transactionsListPagePreloading = () => {
            const deferred = $q.defer();
            require.ensure([], require => {
                const transactionsListModule = require('../../pages/transactions-list/transactions-list.module');
                $ocLazyLoad.load({
                    name: transactionsListModule.default.name,
                });
                deferred.resolve(transactionsListModule.default.controller);
            });

            return deferred.promise;
        };

        this.signUpPagePreloading = () => {
            const deferred = $q.defer();
            require.ensure([], require => {
                const signUpModule = require('../../pages/sign-up/sign-up.module');
                $ocLazyLoad.load({
                    name: signUpModule.default.name,
                });
                deferred.resolve(signUpModule.default.controller);
            });

            return deferred.promise;
        };

        this.signInPagePreloading = () => {
            const deferred = $q.defer();
            require.ensure([], require => {
                const signInModule = require('../../pages/sign-in/sign-in.module');
                $ocLazyLoad.load({
                    name: signInModule.default.name,
                });
                deferred.resolve(signInModule.default.controller);
            });

            return deferred.promise;
        };

        this.adminPagePreloading = () => {
            const deferred = $q.defer();
            require.ensure([], require => {
                const adminPageModule = require('../../pages/admin/admin.module');
                $ocLazyLoad.load({
                    name: adminPageModule.default.name,
                });
                deferred.resolve(adminPageModule.default.controller);
            });

            return deferred.promise;
        };

        this.converterPagePreloading = () => {
            "ngInject";
    
            const deferred = $q.defer();
            require.ensure([], require => {
                const converterModule = require('../../pages/currency-converter/converter.module');
                $ocLazyLoad.load({
                    name: converterModule.default.name,
                });
                deferred.resolve(converterModule.default.controller);
            });
            return deferred.promise;
        }
    
        this.homePagePreloading = () => {
            "ngInject";
    
            const deferred = $q.defer();
            require.ensure([], require => {
                const homeModule = require('../../pages/home/home.module');
                $ocLazyLoad.load({
                    name: homeModule.default.name,
                });
                deferred.resolve(homeModule.default.controller);
            });
            return deferred.promise;
        }

        this.getUsersFromFirebase = () => syncDataService.getAllUsersFromFirebase();
    });
}
