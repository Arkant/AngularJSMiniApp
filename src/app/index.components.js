'use strict';

import footerModule from './components/footer/footer.module';
import headerModule from './components/header/header.module';
import weatherModule from './components/weather/weather.module';
import adminModalModule from './components/admin-modal/admin-modal.module';

export default angular.module('index.components', [
	footerModule.name,
	headerModule.name,
	weatherModule.name,
	adminModalModule.name
]);
