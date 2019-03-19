'use strict';

export default class HomeController {
  constructor(workWithDate, syncDataService) {
    'ngInject';

    this.syncDataService = syncDataService;
    this.workWithDate = workWithDate;
    this.headers = ['Amount From', 'Amount To', 'Commission', 'Currency From', 'Currency To', 'Date', 'Rate'];

    this.sort = {
      sortingOrder: 'date',
      reverse: false
    };
    this.init();
  }

  init() {
    this.currentUserDeals = this.syncDataService.getDealsFromFirebase();
    this.currentUserDeals.$loaded(() => {
      this.workWithDate.formatDate(this.currentUserDeals);
    });
  }
}
