'use strict';

angular.module('vujohnnyApp')
  .controller('NavbarCtrl', function ($scope) {
    $scope.menu = [{
      'title': 'Home',
      'state': 'main'
    },
    {
      'title': 'Portfolio',
      'state': 'portfolio'
    },
    {
      'title': 'Resume',
      'state': 'resume'
    },
    {
      'title': 'Contact',
      'state': 'contact'
    }
    ];

    $scope.isCollapsed = true;
  });
