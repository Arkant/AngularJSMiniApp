'use strict';

export default class HomeController {
  constructor(workWithDate, syncDataService, $state) {
    'ngInject';

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
    this.currentUserDeals = this.syncDataService.getDealsFromFirebase();

    this.currentUserDeals.$loaded(() => {
      this.workWithDate.transformData(this.currentUserDeals);
    });
  }
}
