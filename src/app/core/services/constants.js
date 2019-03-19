'use strict';

export default function (app) {
    app
        .constant('ROUTE_ERRORS', {
            auth: 'Authorization has been denied.',
        });

    app.constant('converterConstants', {
        'fee': [0, 1, 2, 3, 4, 5]
    });

    app.constant('weatherAPIconstants', {
        'APIkey': 'b0f2a7928e6c418baf01f03c9101c5df'
    });

    app.constant('roles', {
        'USER': 'user',
        'ADMIN': 'admin'
    })
}
