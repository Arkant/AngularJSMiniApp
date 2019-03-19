'use strict';

import HomeController from './home.controller';
import homeTpl from './home.html';

export default class HomeComponent {
    constructor() {
        this.controller = HomeController;
        this.templateUrl = homeTpl;
        this.controllerAs = 'homeCtrl';
    }
}