'use strict';

export default function (app) {
  app
    .service('workWithDate', function () {
      'ngInject';

      this.transformData = listOfData => {
        listOfData.forEach(e => {
            e.date = new Date(e.date)
        })
      }

    })
}