'use strict';

export default function (app) {

  app.directive("onFileChange", function () {
    return function (scope, elm, attrs) {
      elm.bind("change", function (event) {
        scope.$applyAsync(function () {
          scope[attrs.name] = event.target.files[0];
        });
      });
    };
  });

}