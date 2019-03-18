'use strict';

export default class HomeController {
  constructor(workWithDate, syncDataService, $scope) {
    'ngInject';

    this.syncDataService = syncDataService;
    this.workWithDate = workWithDate;
    $scope.headers = ['Amount From', 'Amount To', 'Commission', 'Currency From', 'Currency To', 'Date', 'Rate'];

    this.sort = {
      sortingOrder: 'date',
      reverse: false
    };
    this.init();
  }

  init() {
    this.currentUserDeals = this.syncDataService.getDealsFromFirebase();
    this.currentUserDeals.$loaded(() => {
      this.workWithDate.transformData(this.currentUserDeals);
    });
  }
}
