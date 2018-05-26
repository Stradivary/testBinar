'use strict';

/**
 * @ngdoc overview
 * @name simpleAngularApp
 * @description
 * # simpleAngularApp
 *
 * Main module of the application.
 */
angular
  .module('simpleAngularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage',
    'angular-jwt',
    'ui.bootstrap',
    'ui.bootstrap.modal'
  ])
  .config(function ($routeProvider,$httpProvider, jwtOptionsProvider) {

    $routeProvider
      .when('/login', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/register',{
        templateUrl:'views/register.html',
        controller:'RegisterCtrl',
        controllerAs:'register'
      })
      .when('/home',{
        templateUrl:'views/home.html',
        controller:'HomeCtrl',
        controllerAs:'home'
      })
      .when('/detail-account',{
        templateUrl:'views/detail-account.html',
        controller:'DetailAccountCtrl',
        controllerAs:'detailaccount'
      })
      .otherwise({
        redirectTo: '/login'
      })

  })

