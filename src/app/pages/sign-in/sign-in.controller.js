/* eslint-disable no-console */
function SignInController($scope, authenticationService) {
  'ngInject';
  $scope.signIn = () => {
    $scope.warning = "";
    const login = $scope.user.email;
    const password = $scope.user.password;

    authenticationService.signInToFirebase(login, password)
    .then(function(response) {
      if (response) {
        $scope.warning = response.message;
      }
    })
  };
}

export default SignInController;