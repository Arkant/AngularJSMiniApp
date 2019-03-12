/* eslint-disable no-console */
'use strict';

import firebase from 'firebase';
import 'angularfire';


// ==== connecting to firebase ====
// import configFirebase from '~/env.js'
// firebase.initializeApp(configFirebase);
// ================================


export default function (app) {
  app
    .service('syncDataService', function ($firebaseArray, $firebaseObject, $firebaseStorage, usersMocksService, $rootScope) {
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
        const ref = firebase.database().ref();
        $rootScope.listOfUsers = $firebaseObject(ref.child('listOfUsers'));
        $rootScope.listOfUsers.$loaded()
          .then(console.log($rootScope.listOfUsers));
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

      this.changeUserRole = (uid, role) => {
        console.log(role);
        $rootScope.listOfUsers[uid].role = role;

        const ref = firebase.database().ref()
          .child('listOfUsers')
          .child(uid);
        return ref.update({
          [role]: role
        })
      }
    })
}