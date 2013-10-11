'use strict';
angular.module('navigation')
  .controller('NavigationCtrl', ['$scope', 'NavServices',
    function ($scope, NavServices) {
      $scope.navItems = NavServices.get();

    }]);