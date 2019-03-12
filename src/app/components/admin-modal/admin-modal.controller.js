'use strict';

function AdminModalController(sharedAdminFactory, $scope, syncDataService) {
    'ngInject';

    const self = this;
    
    $scope.$watch(() => sharedAdminFactory.userData, () => {
        // const userID = sharedAdminFactory.getUserData();
        const userID = '3vesXZTo6tYLgevTBY3aLdZ26TB2';
        self.data = syncDataService.getCheckedUserDealsFromFirebase(userID);
    });
}

export default AdminModalController;
