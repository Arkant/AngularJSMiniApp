'use strict';

export default class currencyController {
    constructor($scope, CurrencyService, converterConstants) {
        'ngInject';
        this.CurrencyService = CurrencyService;

        this.currency = CurrencyService.getResponse();
        this.currencyObj = CurrencyService.getList();

        [this.comission] = converterConstants.fee;
        this.constantsFee = converterConstants.fee;

        this.tradeValue = null;
        this.receiveValue = null;

        this.currencyGiveName = 'USD';
        this.currencyReceiveName = 'RUR';

        this.currencyObj[this.currencyGiveName] = {};
        this.currencyObj[this.currencyReceiveName] = {};

        $scope.$watchGroup(
            ['cc.currencyReceiveName', 'cc.currencyReceiveName', 'cc.tradeValue', 'cc.comission'],
            () => {
              this.convertMoney();
              this.withCommissions();
            }
        );
    }

    convertMoney() {
        let result = 0;

        if (this.currencyGiveName === 'BTC') {
            result = this.CurrencyService.convertFromBTCtoUAH(this.tradeValue, this.currencyObj[this.currencyGiveName].buy, this.currency[0].buy);
        } else {
            result = this.CurrencyService.convertToUAH(this.tradeValue, this.currencyObj[this.currencyGiveName].buy);
        }

        this.receiveValue = this.CurrencyService.convertFromUAH(result, this.currencyObj[this.currencyReceiveName].sale);
    }

    swapCurrency () {
        [this.currencyGiveName, this.currencyReceiveName] = [this.currencyReceiveName, this.currencyGiveName];
        [this.tradeValue, this.receiveValue] = [this.receiveValue, this.tradeValue];
    }

    withCommissions () {
        this.convertMoney();
        const resWithFee = this.CurrencyService.convertWithFee(this.receiveValue, this.comission);
        this.receiveValue = Number((this.receiveValue - resWithFee).toFixed(2));
      }

}
