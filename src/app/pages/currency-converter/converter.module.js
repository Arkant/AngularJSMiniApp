'use strict';

import './converter.scss';
import ConverterController from './converter.controller';

const converterPageModule = angular.module('myApp', [])
    .config(CurrencyServiceProvider => {
        'ngInject';
        
        CurrencyServiceProvider.congigurateAPI('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    })

converterPageModule.controller('ConverterController', ConverterController);

export default converterPageModule;