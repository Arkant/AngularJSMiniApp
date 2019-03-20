'use strict';

import firebase from 'firebase';

export default function (app) {
  app
    .service('syncDataService', function ($firebaseArray, $firebaseObject, $rootScope) {
      'ngInject';
      
      this.getDealsFromFirebase = () => {
        const ref = firebase.database().ref();
        $rootScope.currentUserDeals = $firebaseArray(ref.child('listOfDeals').child($rootScope.currentUserId));
        return $rootScope.currentUserDeals;
      };
      
      this.addDealToFirebase = deal => {
        const ref = firebase.database().ref();
        $rootScope.currentUserDeals = $firebaseArray(ref.child('listOfDeals').child($rootScope.currentUserId));
        $rootScope.currentUserDeals.$add(deal);
        return $rootScope.currentUserDeals;
      };

      this.getUserFromFirebase = uid => {
        const ref = firebase.database().ref();
        const user = $firebaseObject(ref.child('listOfUsers').child(uid));
        return user.$loaded();
      }

      this.saveCurrentUserToFirebase = () => {
        const { uid, firstName, lastName, phone, email, role, ava } = $rootScope.currentUser;
        const ref = firebase.database().ref();
        return ref.child('listOfUsers')
        .child(uid)
        .update({ uid, firstName, lastName, phone, email, role, ava })
      }

      this.getAllFromFirebase = () => {
        const ref = firebase.database().ref();
        const obj = $firebaseObject(ref);
        $rootScope.fullBase = {};
        obj.$loaded()
          .then(function() {
            $rootScope.fullBase.listOfUsers = obj.listOfUsers;
            $rootScope.fullBase.listOfDeals = obj.listOfDeals;
          });
      }

      this.getAllUsersFromFirebase = () => {
        $rootScope.listOfUsers = {};
        const ref = firebase.database().ref();
        $rootScope.listOfUsers = $firebaseObject(ref.child('listOfUsers'));
        return $rootScope.listOfUsers.$loaded();
      }


      this.getCheckedUserDealsFromFirebase = uid => {
        const ref = firebase.database().ref();
        return $firebaseArray(ref.child('listOfDeals').child(uid));
      }

      this.getProfileImageRef = () => {
        const ref = firebase.storage().ref()
          .child('currency-converter/profile-pictures')
          .child($rootScope.currentUserId)
        return ref.getDownloadURL();
      }

      this.uploadProfileImage = file => {
        const ref = firebase.storage().ref()
          .child('currency-converter/profile-pictures')
          .child($rootScope.currentUserId);
        return ref.put(file)
      }
    })
}