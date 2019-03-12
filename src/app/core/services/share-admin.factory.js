'use strict';

export default function (app) {
    app
        .factory('sharedAdminFactory', sharedAdminFactory);

        function sharedAdminFactory () {
            'ngInject';

            const methods = {};
            this.userData = null;

            methods.setUserData = function (data) {
                this.userData = data;
            };

            methods.getUserData = function () {
                return this.userData;
            };
            
            return methods;
        }
}
 