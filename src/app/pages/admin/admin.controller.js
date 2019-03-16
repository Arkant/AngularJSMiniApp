'use strict';

export default class AdminController {
    constructor($rootScope, syncDataService, adminService, sharedAdminFactory) {
        'ngInject';
        this.rootScope = $rootScope;
        this.syncDataService = syncDataService;
        this.adminService = adminService;
        syncDataService.getAllUsersFromFirebase();

        this.listOfUsers = this.rootScope.listOfUsers;
        this.filteredItems = [];      
        this.headers =  ['Id','Name','E-mail','Admin','Password','History',' Profile'];
        this.sort = {       
            sortingOrder : 'id',
            reverse : false
        }
        this.adm = true;
        this.listOfUsers = this.syncDataService.getDealsFromFirebase();

        this.sharedAdminFactory = sharedAdminFactory;
    }

    setSelectedUser(id){
        this.sharedAdminFactory.setUserData(id);
    }

    resetPsw(id) {
        this.rootScope.listOfUsers[id].password = this.rootScope.listOfUsers[id].login;
    }
    
    changeUserRole(id){
        let userRole = this.rootScope.listOfUsers[id].role;
        userRole = userRole === 'admin' ? 'user': 'admin';
        this.adminService.changeUserRole(id, userRole);
    }

}
