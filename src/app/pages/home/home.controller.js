'use strict';

export default class HomeController {
  constructor(workWithDate, syncDataService, $state, $scope) {
    'ngInject';

    this.state = $state;
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
// eslint-disable-next-line no-console
console.log(this.currentUserDeals);
    this.currentUserDeals.$loaded(() => {
      this.workWithDate.transformData(this.currentUserDeals);
    });
  }
}
