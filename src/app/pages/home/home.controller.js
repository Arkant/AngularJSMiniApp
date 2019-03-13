'use strict';

function HomeController($scope, workWithDate, $rootScope, syncDataService, $state) {
  'ngInject';

  if (!$rootScope.currentUserId) {
    $state.go('sign-up');
  } else {
    $scope.currentUserDeals = syncDataService.getDealsFromFirebase();
    $scope.dealsAreLoaded = false;

    $scope.currentUserDeals.$loaded(() => {
      workWithDate.transformData($scope.currentUserDeals);
      $scope.dealsAreLoaded = true;
    });
  }

  $scope.sort = {
    sortingOrder: 'date',
    reverse: false
  };
}

export default HomeController;