'use strict';

export default class SignUpController {
  constructor($scope, authenticationService) {
    'ngInject';
    // #fix add user's name and last name to firebase
    this.addUser = () => {
      $scope.warning = "";
      authenticationService.signUpToFirebase(this.newUser)
      .then(function(response) {
        if (response) {
          $scope.warning = response.message;
        }
      })
    }
  }  
}