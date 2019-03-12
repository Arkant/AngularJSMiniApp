'use strict';

export default function (app) {
  app
    .service('homeService', function () {
      'ngInject';

      this.transformData = (listOfData) => {
        return listOfData.map(e => {
          return {
            date: new Date(e.date),
            currencyFrom: e.currencyFrom,
            currencyTo: e.currencyTo,

            amountFrom: e.amountFrom,
            amountTo: e.amountTo,

            commission: e.commission,
            rate: e.rate
          }
        })
      }

    })
}