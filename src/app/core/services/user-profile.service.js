'use strict';

export default function (app) {
  app
    .service('userProfileService', function (usersMocksService, syncDataService, $rootScope, $log, roles) {
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
        const { firstName, lastName, role, phone, email, ava } = $rootScope.currentUser;
        return { firstName, lastName, role, phone, email, ava };
      };

      this.saveToCurrentUser = function (data) {
        const { 
          firstName = '', 
          lastName = '', 
          role = usersMocksService.userRole, 
          phone = '', 
          email = '', 
          ava = '' } = data;

        $rootScope.currentUser = { firstName, lastName, role, phone, email, ava };
      };

      this.setProfileImage = file => {
        syncDataService.uploadProfileImage(file)
          .then(function() {
            return syncDataService.getProfileImageRef()
          })
          .then(function(link) {
            $rootScope.currentUser.ava = link;
          })
          .catch(function(error) {
            $log.log(error);
          })
      };
    })
}