'use strict';

class SignUpController {
  constructor(authenticationService, toastr) {
    'ngInject';
    this.authenticationService = authenticationService;
    this.toastr = toastr;
  }  

  addUser () {
    this.authenticationService.signUpToFirebase(this.newUser)
    .then(response => {
      if (response) {
        this.toastr.error(response.message);
      }
    });
  }
}

export default SignUpController;