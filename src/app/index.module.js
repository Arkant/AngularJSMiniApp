'use strict';

import config from './index.config';
import run from './index.run';

import uiRouter from '@uirouter/angularjs';

import coreModule from './core/core.module';
import indexComponents from './index.components';
import indexRoutes from './index.routes';
import adminModule from './pages/admin/admin.module';
import converterModule from './pages/currency-converter/converter.module';
import homePageModule from './pages/home/home.module';
import signUpModule from './pages/sign-up/sign-up.module';
import signInModule from './pages/sign-in/sign-in.module';

const App = angular.module(
  "angularApp", [
    // plugins
    uiRouter,
    "geolocation",
    "ngStorage",
    "ngAutocomplete",
    "ngMessages", 
    "oc.lazyLoad",
    "firebase",
    "toastr",

    // core
    coreModule.name,

    // components
    indexComponents.name,

    // routes
    indexRoutes.name,

    // pages
    converterModule.name,
    adminModule.name,
    homePageModule.name,
    signUpModule.name,
    signInModule.name
  ]
);

App
  .config(config)
  .run(run);

export default App;
