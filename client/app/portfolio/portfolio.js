'use strict';

angular.module('vujohnnyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'app/portfolio/portfolio.html',
        controller: 'PortfolioCtrl'
      });
  });
