'use strict';

function AdminModalController(sharedAdminFactory, $scope, syncDataService, workWithDate) {
    'ngInject';

    const self = this;
    
    $scope.$watch(() => sharedAdminFactory.userData, () => {
        const userID = sharedAdminFactory.getUserData();
        self.data = syncDataService.getCheckedUserDealsFromFirebase(userID);
        self.data.$loaded(() => {
            workWithDate.transformData(self.data)
          });
    });
}

export default AdminModalController;
