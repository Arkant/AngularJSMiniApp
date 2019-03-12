/* eslint-disable no-console */
'use strict';

import firebase from 'firebase';
import 'angularfire';


// // ==== connecting to firebase ====
import configFirebase from '~/env.js'
firebase.initializeApp(configFirebase);
// // ================================


export default function (app) {
  app
    .service('authenticationService', function ($firebaseAuth, userProfileService, syncDataService, $location, $rootScope) {
      'ngInject';

      this.signUpToFirebase = user => {
        console.log(user)
        const { email, password } = user;

        $rootScope.auth = $firebaseAuth(firebase.auth());

        return $rootScope.auth.$createUserWithEmailAndPassword(email, password)
          .then(function(firebaseUser) {
            userProfileService.createNewUser(user, firebaseUser.user.uid);

            return syncDataService.saveUserInfoToFirebase(firebaseUser.user.uid);
          })
          .then(function() {
            $location.path('/home')
          })
          .catch(function(error) {
            return error;
          });
      };

      // this.getUserFromLocalStorage = () => {
      //   const user = '';
      //   if (user === "") {
      //     localStorage.getItem(user)
      //     console.log(user);
      //   }
      // }

      this.signInToFirebase = (email, password) => {
        $rootScope.auth = $firebaseAuth(firebase.auth());

        return $rootScope.auth.$signInWithEmailAndPassword(email, password)
          .then(function(data) {
            $rootScope.currentUserId = data.user.uid;
            return syncDataService.getUserInfoFromFirebase(data.user.uid);
          })
          .then(function(user) {
            $rootScope.currentUser = user;
            $location.path('/home');
          })
          .catch(function(error) {
            return error;
          })
      };

      this.signOutFromFirebase = () => {
        $rootScope.auth.$signOut()
          .then(function() {
            $location.path('/sign-in')
          })
      }
    })
}