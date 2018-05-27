'use strict';
/**  
 * @ngdoc function  
 * @name simpleAngularApp.controller:DetailProductCtrl  
 * @description  
 * # MainCtrl  
 * Controller of the simpleAngularApp  
 */
angular.module('simpleAngularApp')
  .controller('DetailProductCtrl', ['$scope', '$uibModal', '$log', 'authService', '$location', '$localStorage', DetailProductCtrl]);
function DetailProductCtrl($scope, $uibModal, $log, authService, $location, $localStorage) {

  $scope.toBack = function(){
    history.back();
  }

  var paramId = $location.search().id;

  if ($localStorage.accessToken == undefined || $localStorage.accessToken == '') {
    $location.path('/login')
  }

  function getDetail(paramId) {
    authService.getDetailProduct(paramId).then(
      function (response) {
        $scope.detailProduct = response.data.result;
      }
    )
  }
  getDetail(paramId)

  $scope.logOut = function () {
    $localStorage.accessToken = "";
    messageService.toasterMessage(CONF.TOASTER_TOP_CENTER, CONF.TOASTER_SUCCESS, "Berhasil Logout!");
    $location.path('/login')
  }


}

