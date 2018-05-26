'use strict';  
 /**  
  * @ngdoc function  
  * @name simpleAngularApp.controller:MainCtrl  
  * @description  
  * # HomeCtrl  
  * Controller of the simpleAngularApp  
  */  
 angular.module('simpleAngularApp')  
  .controller('HomeCtrl', ['$scope','$uibModal','$log','authService','$location','$localStorage','$window','$interval',HomeCtrl]); 
  function HomeCtrl($scope,$uibModal,$log,authService,$location,$localStorage,$window,$interval){  
  
   $scope.animationsEnabled = true;  

 $scope.back = function(){ 
   history.back();
 }


 
 function getAllData(){
   
   authService.getData().then(
     function(response){
       $scope.getData = response.data.result;
       console.log(response.data.result)
       
     }
   )
 }
 getAllData();


 self.addProduk = function() {

  var modalInstance = $modal.open({
      templateUrl: 'views/modal/addModal.html',
      controller: 'ModalCtrl',
      backdrop: 'static',
      size: 'md',
      keyboard: false,
      resolve: {
          modalParam: function() {
              return {
                  title: 'Add Produk',
                  path: '',
                  token: $localStorage.accessToken
              };
          }

      }
  });
  modalInstance.result.then(function(selectedItem) {
      authService.getData().then(function(response){
      self.getData = response.data.result;

});
      
  }, function() {
      $log.info('Modal dismissed at: ' + new Date());
  });
  // self.bigTotalItems = self.data.length;
}


 

 $scope.toDetail = function(number){
   $location.path('/detail-account').search({id:number})
 }

 var cekTcoken = $window.localStorage.getItem('ngStorage-accessToken');
 console.log(cekTcoken)
 function cekDong(cekTcoken){
   if(cekTcoken == undefined || cekTcoken == ""){
    $location.path('/login')
   }
 }
 cekDong(cekTcoken)
//  $interval( function(){cekDong(cekTcoken); }, 1000);



  
}
  
 