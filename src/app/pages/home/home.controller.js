'use strict';

function HomeController($scope, homeService, $rootScope, syncDataService, $state) {
  'ngInject';

  if (!$rootScope.currentUserId) {
    $state.go('sign-up');
  } else {
    $scope.currentUserDeals = syncDataService.getDealsFromFirebase();

    $scope.currentUserDeals.$loaded(() => {
      $scope.currentUserDeals = homeService.transformData($scope.currentUserDeals);
    });
  }

  $scope.sort = {
    sortingOrder: 'date',
    reverse: false
  };
}

export default HomeController;