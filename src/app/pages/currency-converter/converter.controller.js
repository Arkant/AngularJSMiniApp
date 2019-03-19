'use strict';

export default class ConverterController {
    constructor($scope, $rootScope, CurrencyService, converterConstants, syncDataService, toastr) {
        'ngInject';
        this.CurrencyService = CurrencyService;
        this.rootScope = $rootScope;
        this.syncDataService = syncDataService;
        this.toastr = toastr;

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
        const userDeal = this.CurrencyService.getUserDeals(objValue);

        this.syncDataService.addDealToFirebase(userDeal);
        this.syncDataService.getAllFromFirebase(); // it's just for check. It show all deals in console
        this.tradeValue !== null ? this.toastr.success('Congrats! Successful deal!') : this.toastr.error('Ooops! How much trade?'); 
        this.receiveValue = null;
        this.tradeValue = null;
   }

}
