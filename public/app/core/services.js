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