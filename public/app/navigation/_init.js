'use strict';
angular.module('navigation', [])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/navigation', { controller: 'NavigationCtrl', templateUrl: '/app/navigation/views/navigation.html' });
  }]);