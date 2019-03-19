'use strict';

import AdminController from './admin.controller';

const adminPageModule = angular.module('admin-module', [])
adminPageModule.controller('AdminController', AdminController)

export default adminPageModule;
