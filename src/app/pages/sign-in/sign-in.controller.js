'use strict';


class SignInController {
    constructor($scope, authenticationService, toastr, $rootScope) {
        'ngInject';
        this.scope = $scope;
        this.authenticationService = authenticationService;
        this.toastr = toastr;

        $rootScope.$on('logOut', function() {
            authenticationService.signOutFromFirebase();
        })
      }
  
    signIn () {
      const { email, password } = this.scope.user;
      
      this.authenticationService.signInToFirebase(email, password)
      .then(response => {
        if (response) {
          this.toastr.error(response.message);
        }
      });
    }
}
export default SignInController;