'use strict';

/**
 * @ngdoc overview
 * @name angularAssignmentApp
 * @description
 * # angularAssignmentApp
 *
 * Main module of the application.
 */
angular
  .module('angularAssignmentApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/limited', {
        templateUrl: 'views/limited.html',
        controller: 'LimitedCtrl',
        controllerAs: 'limited'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
