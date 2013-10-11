"use strict";

angular.module('core')
  .controller('NavCtrl', ['$scope', 'NavServices',
    function ($scope, NavServices) {
      $scope.navItems = NavServices.get();
    }])
  .controller('HomeCtrl', ['$scope', function ($scope) {


  }])
  .controller('ErrorCtrl', ['$scope', function ($scope) {


  }]);