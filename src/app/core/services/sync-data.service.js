/* eslint-disable no-console */
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

      this.getUserInfoFromFirebase = uid => {
        const ref = firebase.database().ref();
        const user = $firebaseObject(ref.child('listOfUsers').child(uid));
        return user;
      }

      this.saveUserInfoToFirebase = uid => {
        const ref = firebase.database().ref();
        return ref.child('listOfUsers')
        .child(uid)
        .update({
          userId: uid,
          firstName: $rootScope.currentUser.firstName,
          lastName: $rootScope.currentUser.lastName,
          phone: $rootScope.currentUser.phone,
          email: $rootScope.currentUser.email,
          ava: $rootScope.currentUser.ava
        })
      }

      this.getAllFromFirebase = () => {
        const ref = firebase.database().ref();
        const obj = $firebaseObject(ref);
        $rootScope.fullBase = {};
        obj.$loaded()
          .then(function() {
            $rootScope.fullBase.listOfUsers = obj.listOfUsers;
            $rootScope.fullBase.listOfDeals = obj.listOfDeals;
          })
          .then(console.log($rootScope.fullBase));
      }

      this.getAllUsersFromFirebase = () => {
        $rootScope.listOfUsers = {};
        const ref = firebase.database().ref();
        $rootScope.listOfUsers = $firebaseObject(ref.child('listOfUsers'));
        return $rootScope.listOfUsers.$loaded()
          .then(() => {
            console.log($rootScope.listOfUsers);
          });
      }


      this.getCheckedUserDealsFromFirebase = userID => {
        const ref = firebase.database().ref();
        return $firebaseArray(ref.child('listOfDeals').child(userID));
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