'use strict';

import converterController from './converter.controller';
import converterTpl from './converter.html';

export default class ConverterComponent {
    constructor() {
        this.controller = converterController;
        this.controllerAs = 'cc';
        this.templateUrl = converterTpl;
    }
}