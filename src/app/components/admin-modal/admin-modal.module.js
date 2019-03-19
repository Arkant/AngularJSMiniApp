'use strict';

import adminModalComponent from './admin-modal.component';
import './admin-modal.scss';

const adminModalModule = angular.module('admin-modal-module', []);

adminModalModule
    .component('adminModalComponent', new adminModalComponent());

export default adminModalModule;
