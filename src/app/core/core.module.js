'use strict';

const shared = angular.module('core.shared', []);

import validationTestDirective from './directives/validation-test/validation-test.directive';
import preloaderDirective from './directives/preloader/preloader.directive';
import customSort from './directives/directive.table';
import tableDirective from './directives/table/table.directive';

import constants from './services/constants';
import storeFactory from './services/store.factory';
import sharedAdminFactory from './services/share-admin.factory';
import usersMocksService from './services/user.mocks.service';
import resolverProvider from './services/resolver.provider';


import workWithCurrencyProvider from './services/converter.provider';
import currencyFilter from './filter/currenyc.filter';

import syncDataService from './services/sync-data.service';
import authenticationService from './services/authentication.service';
import userProfileService from './services/user-profile.service';
import weatherAPIService from './services/weatherAPI.service';

validationTestDirective(shared);
preloaderDirective(shared);
tableDirective(shared);

constants(shared);
storeFactory(shared);
sharedAdminFactory(shared);
usersMocksService(shared);
resolverProvider(shared);
customSort(shared)


workWithCurrencyProvider(shared);
currencyFilter(shared);

syncDataService(shared);
authenticationService(shared);
userProfileService(shared);
weatherAPIService(shared);

export default shared;
