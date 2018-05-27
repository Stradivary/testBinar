'use strict';
/**  
 * @ngdoc function  
 * @name simpleAngularApp.controller:MainCtrl  
 * @description  
 * # HomeCtrl  
 * Controller of the simpleAngularApp  
 */
angular.module('simpleAngularApp')
  .controller('HomeCtrl', ['$scope', 'CONF', '$uibModal', '$log', 'authService', '$location', '$localStorage', '$window', '$interval', 'messageService', HomeCtrl]);
function HomeCtrl($scope, CONF, $uibModal, $log, authService, $location, $localStorage, $window, $interval, messageService) {

  $scope.animationsEnabled = true;

  if ($localStorage.accessToken == undefined || $localStorage.accessToken == '') {
    $location.path('/login')
  }


  function getAllData() {
    authService.getData().then(
      function (response) {
        $scope.getData = response.data.result;
      }
    )
  }
  getAllData();

  $scope.toDetail = function (id){
    $location.path('/detailProduct').search({id: id});
  }


  $scope.addProduk = function () {

    var modalInstance = $uibModal.open({
      templateUrl: 'views/addModal.html',
      controller: 'ModalCtrl',
      controllerUrl: 'controllers/ModalController.js',
      controllerAs: 'ctrl',
      backdrop: 'static',
      size: 'md',
      keyboard: false,
      resolve: {
        modalParam: function () {
          return {
            title: 'Create New',
            flag:'Add',
            path: '',
            token: $localStorage.accessToken
          };
        }

      }
    });
    modalInstance.result.then(function (selectedItem) {
      authService.getData().then(function (response) {
      self.getData = response.data.result;
      getAllData();

      });

    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  }

  $scope.editProduk = function(edit) {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/addModal.html',
      controller: 'ModalCtrl',
      controllerUrl: 'controllers/ModalController.js',
      controllerAs: 'ctrl',
      backdrop: 'static',
      size: 'md',
      keyboard: false,
        resolve: {
            modalParam: function() {
                return {
                    title: 'Edit Product',
                    id: edit.id,
                    flag:'Edit',
                    name: edit.name,
                    price: edit.price,
                    imageurl: edit.imageurl,
                    token: $localStorage.accessToken,
                };
            }

        }
    });
    modalInstance.result.then(function(selectedItem) {
      authService.getData().then(function (response) {
        self.getData = response.data.result;
        getAllData()
        
});


        
    }, function() {
        $log.info('Modal dismissed at: ' + new Date());
    });
}

$scope.deleteProduk = function(paramDelete) {
  var modalInstance = $uibModal.open({
    templateUrl: 'views/deleteModal.html',
    controller: 'ModalCtrl',
    controllerUrl: 'controllers/ModalController.js',
    controllerAs: 'ctrl',
    backdrop: 'static',
    size: 'md',
    keyboard: false,
      resolve: {
          modalParam: function() {
              return {
                  title: 'Are you sure want to delete',
                  id: paramDelete.id,
                  name: paramDelete.name,
                  token: $localStorage.accessToken,
              };
          }

      }
  });
  modalInstance.result.then(function(selectedItem) {
    authService.getData().then(function (response) {
      self.getData = response.data.result;
      getAllData();
      
});


      
  }, function() {
      $log.info('Modal dismissed at: ' + new Date());
  });
}

  $scope.logOut = function () {
    $localStorage.accessToken = "";
    messageService.toasterMessage(CONF.TOASTER_TOP_CENTER, CONF.TOASTER_SUCCESS, "Berhasil Logout!");
    $location.path('/login')
  }


}

