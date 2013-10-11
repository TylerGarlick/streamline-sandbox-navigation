"use strict";
angular.module('app', ['ngRoute', 'modules'])
  .config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('!');
  }]);
angular.module('modules', ['core', 'navigation']);
angular.module('core', []).config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', { controller: 'HomeCtrl', templateUrl: '/app/core/views/home.html'})
    .when('/404', { controller: 'ErrorCtrl', templateUrl: '/app/core/views/404.html'})
    .otherwise({redirectTo: '/404'});

}]);
'use strict';
angular.module('navigation', [])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/navigation', { controller: 'NavigationCtrl', templateUrl: '/app/navigation/views/navigation.html' });
  }]);
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
'use strict';

angular.module('core')
  .service('NavServices', [function () {
    var _navigation = [
      {
        "id": "ASDF-asdf-asf-a-sdf-sadf",
        "name": "Packaging",
        "url": "http://localhost:3000/#!/packaging",
        "target": "_self",
        "isActive": true,
        "ordinal": 0,
        "children": []
      },
      {
        "name": "Production",
        "url": "http://localhost:3000/#!/production",
        "target": "_self",
        "isActive": true,
        "ordinal": 1,
        "children": []
      },
      {
        "name": "Settings",
        "url": "http://localhost:3000/#!/settings",
        "target": "_self",
        "isActive": true,
        "ordinal": 2,
        "children": [
          {
            "name": "Security",
            "url": "http://localhost:3000/#!/security",
            "target": "_self",
            "isActive": true,
            "ordinal": 0,
            "children": [
              {
                "name": "Modules",
                "url": "http://localhost:3000/#!/modules",
                "target": "_self",
                "isActive": true,
                "ordinal": 0,
                "children": []
              },
              {
                "name": "Users",
                "url": "http://localhost:3000/#!/users",
                "target": "_self",
                "isActive": true,
                "ordinal": 1,
                "children": []
              }
            ]
          },
          {
            "name": "Navigation",
            "url": "http://localhost:3000/#!/navigation",
            "target": "_self",
            "isActive": true,
            "ordinal": 1,
            "children": []
          }
        ]
      },
      {
        "name": "WIP",
        "url": "http://localhost:3000/#!/wip",
        "target": "_self",
        "isActive": true,
        "ordinal": 3,
        "children": []
      }
    ];

    return {
      get: function () {
        return _navigation;
      },
      save: function (navigation) {
        _navigation = navigation;
      }
    }
  }]);
'use strict';
angular.module('navigation')
  .controller('NavigationCtrl', ['$scope', 'NavServices',
    function ($scope, NavServices) {
      $scope.navItems = NavServices.get();

    }]);
'use strict';
angular.module('navigation')
  .directive('navigationEdit', [function () {
    return {
      restrict: 'AE',



    };
  }]);