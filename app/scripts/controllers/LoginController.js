'use strict';
/**  
 * @ngdoc function  
 * @name simpleAngularApp.controller:MainCtrl  
 * @description  
 * # MainCtrl  
 * Controller of the simpleAngularApp  
 */
angular.module('simpleAngularApp')
  .controller('MainCtrl', ['$scope', 'CONF', '$uibModal', '$log', 'authService', '$localStorage', '$location', '$window', 'messageService', MainCtrl])
function MainCtrl($scope, CONF, $uibModal, $log, authService, $localStorage, $location, $window, messageService) {

  var self = $scope;

  $scope.submit = function (email, password) {

    var paramLogin = {
      "email": email,
      "password": password
    }

    if (self.email == undefined || self.email == "") {
      messageService.toasterMessage(CONF.TOASTER_TOP_CENTER, CONF.TOASTER_ERROR, "Email Harus di Isi");
    } else if (self.password == undefined || self.password == "") {
      messageService.toasterMessage(CONF.TOASTER_TOP_CENTER, CONF.TOASTER_ERROR, "Password Harus di Isi");
    } else {
      authService.login(paramLogin).then(
        function (response) {
          messageService.toasterMessage(CONF.TOASTER_TOP_CENTER, CONF.TOASTER_SUCCESS, "Berhasil Login!");
          var token = $window.localStorage.getItem('ngStorage-accessToken')
          $localStorage.accessToken = response.data.result.access_token;
          $location.path('/home')
        }
      )

    }

  }

  $scope.register = function () {
    $location.path('/register');
  }
} 