'use strict';

import adminModalTpl from './admin-modal.html';
import AdminModalController from './admin-modal.controller';

export default class adminModalComponent {
    constructor() {
        this.templateUrl = adminModalTpl;
        this.controller = AdminModalController;
        this.controllerAs = 'adminModalCtrl';
    }
}
