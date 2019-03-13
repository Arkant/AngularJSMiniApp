'use strict';

function MainController($scope, $rootScope, syncDataService, $state) {
  'ngInject';

  $scope.test = data => {
    // eslint-disable-next-line no-console
    console.log(data);
  }

  if (!$rootScope.currentUserId) {
    $state.go('sign-up');
  } else {
    $scope.currentUserDeals = {
      data: syncDataService.getDealsFromFirebase(),
      config: {
        amountFrom: {
          header: 'Amount From',
          type: 'text'
        },
        amountTo: {
          header: 'Amount To',
          type: 'text'
        },
        commission: {
          header: 'Commission',
          type: 'text'
        },
        currencyFrom: {
          header: 'Currency From',
          type: 'text'
        },
        currencyTo: {
          header: 'Currency To',
          type: 'checkbox',
          callback: $scope.test
        },
        date: {
          header: 'Date',
          type: 'button',
          callback: $scope.test
        },
        rate: {
          header: 'Rate',
          type: 'button',
          callback: $scope.test
        }
      }
    }
  }
}

export default MainController;