'use strict';

import currencyController from './converter.controller';
import converterTpl from './converter.html';

export default class ConverterComponent {
    constructor() {
        this.controller = currencyController;
        this.controllerAs = 'cc';
        this.templateUrl = converterTpl;
    }
}