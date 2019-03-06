'use strict';

const shared = angular.module('core.shared', []);

import validationTestDirective from './directives/validation-test/validation-test.directive';

import constants from './services/constants';
import storeFactory from './services/store.factory';
import resolverProvider from './services/resolver.provider';

import workWithCurrencyProvider from './services/converter.provider';
import currencyConstant from './services/converter.constants';
import currencyFilter from './filter/currenyc.filter';

validationTestDirective(shared);

constants(shared);
storeFactory(shared);
resolverProvider(shared);

workWithCurrencyProvider(shared);
currencyConstant(shared);
currencyFilter(shared);

export default shared;
