'use strict';

export default class AdminController {
    constructor($rootScope, syncDataService, adminService, sharedAdminFactory, roles, $log) {
        'ngInject';

        this.rootScope = $rootScope;
        this.log = $log;
        this.roles = roles;
        this.syncDataService = syncDataService;
        this.adminService = adminService;
        this.filteredItems = [];
        this.headers = ['Id', 'Name', 'Last Name', 'E-mail', 'Phone', 'Role','Admin', 'Password', 'History'];
        this.sort = {
            sortingOrder: 'id',
            reverse: false
        }
        this.adm = true;
        this.listOfUsers = this.adminService.usersData.map(({ userId, firstName, lastName, email, phone, role }) => ({
            userId,
            firstName,
            lastName,
            email,
            phone,
            role
        }));
        this.sharedAdminFactory = sharedAdminFactory;
    }

    setSelectedUser(id) {
        this.sharedAdminFactory.setUserData(id);
    }

    resetPsw(userId, email) {
        this.adminService.resetUserPassword({ uid: userId, newPassword: email });

    }

    changeUserRole(userObject) { 
        const newRole = userObject.role === this.roles.ADMIN ? this.roles.USER : this.roles.ADMIN;
        this.adminService.changeUserRole(userObject.userId, newRole)
        userObject.role = newRole
    }
}
