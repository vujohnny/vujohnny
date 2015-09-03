'use strict';

angular.module('vujohnnyApp')
  .controller('NavbarCtrl', function ($scope) {
    $scope.menu = [{
      'title': 'Home',
      'state': 'main',
      'icon': 'fa fa-home fa-lg'
    },
    {
      'title': 'Portfolio',
      'state': 'portfolio',
      'icon': 'fa fa-briefcase fa-lg'
    },
    {
      'title': 'Resume',
      'state': 'resume',
      'icon': 'fa fa-file-text-o fa-lg'
    },
    {
      'title': 'Contact',
      'state': 'contact',
      'icon': 'fa fa-envelope-o fa-lg'
    }
    ];
  });
