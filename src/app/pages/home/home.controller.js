'use strict';

export default class HomeController {
  constructor($scope, workWithDate, $rootScope, syncDataService, $state) {
    'ngInject';
    this.scope = $scope;
    this.rootScope = $rootScope;
    this.state = $state;
    this.syncDataService = syncDataService;
    this.workWithDate = workWithDate;

    this.sort = {
      sortingOrder: 'date',
      reverse: false
    };
    this.init();
  }

  init() {
    if (!this.rootScope.currentUserId) {
      this.state.go('sign-up');
    } else {
      this.currentUserDeals = this.syncDataService.getDealsFromFirebase();
      this.dealsAreLoaded = false;

      this.currentUserDeals.$loaded(() => {
        this.workWithDate.transformData(this.currentUserDeals);
        this.dealsAreLoaded = true;
      });
    }
  }
}