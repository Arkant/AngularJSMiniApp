'use strict';

function HeaderController($log, $rootScope) {
    'ngInject';

    if ($rootScope.currentUser) {
        this.currentUser = $rootScope.currentUser;
    }

    $rootScope.$watch('currentUser', currentUser => {
        this.currentUser = currentUser;
    });

    $log.debug('Hello from Header controller!');
}

export default HeaderController;

