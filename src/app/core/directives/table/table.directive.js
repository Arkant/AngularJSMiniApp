'use strict';

export default function (app) {

  app.directive('customTable', tableDirective);

  function tableDirective() {
    'ngInject';

    return {
      restrict: 'E',
      template: `
            <table class="table table-striped rounded table-hover">
              <thead>
                <tr>
                  <th ng-repeat="element in data.config" >{{ element.header }}</th>             
                </tr>
              </thead>
              <tbody>
                <tr class="table-row" ng-repeat="el in data.data">

                  <td ng-repeat="(key, value) in el" ng-if="data.config[key].type === 'text'">
                    {{ value }}
                  </td>

                  <td ng-repeat="(key, value) in el" ng-if="data.config[key].type === 'checkbox'">
                    <input ng-click="data.config[key].callback(value)" type="checkbox">
                    {{ value }}
                  </td>

                  <td ng-repeat="(key, value) in el" ng-if="data.config[key].type === 'button'">
                    <button ng-click="data.config[key].callback(value)">{{ value }}</button>
                  </td>

                </tr>
              </tbody>
            </table>
            `,
      scope: {
        data: '='
      },
    };
  }
}