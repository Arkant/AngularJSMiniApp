'use strict';
import tableTpl from './table.template.html';
export default function (app) {

  app.directive('customTable', tableDirective);

  function tableDirective() {
    'ngInject';

    return {
      restrict: 'E',
      transclude: true,
      templateUrl: tableTpl,
      scope: {
        headers: '=',
        data: '=',
        sort: '=',
        adminTable: '=',
        changeUserRole: '&',
        resetPsw: '&',
        setSelectedUser: '&'   
      },
    };
  }
}