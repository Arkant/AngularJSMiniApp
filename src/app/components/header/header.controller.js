'use strict';

export default class HeaderController{
    constructor ($rootScope, roles, authenticationService) {
        'ngInject';   
        this.menu = null;
        this.roles = roles;
        this.authenticationService = authenticationService;
            
        if ($rootScope.currentUser) {   
            this.currentUser = $rootScope.currentUser;
        }

        $rootScope.$watch('currentUser', currentUser => {
            this.currentUser = currentUser;

            if (this.currentUser) {
                this.menuShow();
            } else {
                this.defaultMenu();
            }
        });

        this.defaultMenu();
    }

    defaultMenu() {
        this.menu = [
            { name: 'Sign in', link: 'sign-in' }, 
            { name: 'Sign up', link: 'sign-up' }
        ];
    }

    menuShow() {
        if (this.currentUser.role === this.roles.USER) {
            this.menu = [
                { name: 'Home', link: 'home' }, 
                { name: 'Converter', link: 'converter' },
            ];
        }
         if (this.currentUser.role === this.roles.ADMIN) {
            this.menu = [
                { name: 'Home', link: 'home' }, 
                { name: 'Converter', link: 'converter' },
                { name: 'Admin', link: 'admin' },
            ];
        }
    } 

    logOut() {
        this.authenticationService.signOutFromFirebase(); 
    } 
}