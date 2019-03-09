'use strict';

export default class currencyController {
    constructor($scope, $rootScope, CurrencyService, converterConstants, syncDataService) {
        'ngInject';
        this.CurrencyService = CurrencyService;
        this.rootScope = $rootScope;
        this.syncDataService = syncDataService;

        this.currency = CurrencyService.getResponse();
        this.currencyObj = CurrencyService.getList();

        [this.commission] = converterConstants.fee;
        this.constantsFee = converterConstants.fee;

        this.tradeValue = null;
        this.receiveValue = null;

        this.currencyGiveName = 'USD';
        this.currencyReceiveName = 'RUR';

        this.currencyObj[this.currencyGiveName] = {};
        this.currencyObj[this.currencyReceiveName] = {};

        $scope.$watchGroup(
            ['cc.currencyReceiveName', 'cc.currencyReceiveName', 'cc.tradeValue', 'cc.commission'],
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
        this.rate = (this.currencyObj[this.currencyGiveName].buy / this.currencyObj[this.currencyReceiveName].sale).toFixed(2);
    }

    swapCurrency () {
        [this.currencyGiveName, this.currencyReceiveName] = [this.currencyReceiveName, this.currencyGiveName];
        [this.tradeValue, this.receiveValue] = [this.receiveValue, this.tradeValue];
    }

    withCommissions () {
        this.convertMoney();
        const resWithFee = this.CurrencyService.convertWithFee(this.receiveValue, this.commission);
        this.receiveValue = Number((this.receiveValue - resWithFee).toFixed(2));
    }

    send() {
        const objValue = {
            currencyGiveName: this.currencyGiveName, 
            currencyReceiveName: this.currencyReceiveName, 
            tradeValue: this.tradeValue,
            receiveValue: this.receiveValue,
            commission: this.commission,
            rate: this.rate
        };
        const userDeals = this.CurrencyService.getUserDeals(objValue);

        this.syncDataService.addDealToFirebase(userDeals);
        this.syncDataService.getAllFromFirebase(); // it's just for check. It show all deals in console
   }

}
