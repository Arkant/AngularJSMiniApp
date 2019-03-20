'use strict';

export default function (app) {
  app
    .service('userProfileService', function (syncDataService, $rootScope, $log, roles) {
      'ngInject';

      class User {
        constructor(user, uid) {
          this.uid = uid;
          this.firstName = user.firstName || '';
          this.lastName = user.lastName || '';
          this.phone = user.phone || '';
          this.email = user.email;
          this.role = roles.USER;
          this.ava = '';
        }
      }

      this.createNewUser = (user, uid) => {
        $rootScope.currentUser = new User(user, uid);
        $rootScope.currentUserId = uid;
      };

      this.createFormInfo = function () {
        return Object.assign({}, $rootScope.currentUser);
      };

      this.saveToCurrentUser = function (data) {
        $rootScope.currentUser = Object.assign($rootScope.currentUser, data);
      };

      this.setProfileImage = file => {
        syncDataService.uploadProfileImage(file)
          .then(function () {
            return syncDataService.getProfileImageRef()
          })
          .then(function (link) {
            $rootScope.currentUser.ava = link;
          })
          .catch(function (error) {
            $log.log(error);
          })
      };
    })
}