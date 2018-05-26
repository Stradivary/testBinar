'use strict';  
 /**  
  * @ngdoc function  
  * @name simpleAngularApp.controller:MainCtrl  
  * @description  
  * # MainCtrl  
  * Controller of the simpleAngularApp  
  */  
 angular.module('simpleAngularApp')  
  .controller('DetailAccountCtrl', ['$scope','$uibModal','$log','authService','$location','$localStorage',DetailAccountCtrl]); 
  function DetailAccountCtrl($scope,$uibModal,$log,authService,$location,$localStorage){  
  
   $scope.animationsEnabled = true;  



 $scope.back = function(){ 
   history.back();
 }
var paramId = $location.search().id;
$scope.number = paramId;
 function getDetailAccount(paramId){
    authService.getDetailAccount(paramId).then(
      function(response){
          $scope.detail = response.data;
          console.log(response.data)
      }
    )
 }
 getDetailAccount(paramId)

//  var cekTcoken = $window.localStorage.getItem('ngStorage-accessToken');
//  console.log(cekTcoken)
//  function cekDong(cekTcoken){
//    if(cekTcoken == undefined || cekTcoken == ""){
//     $location.path('/login')
//    }
//  }
//  cekDong(cekTcoken)

}
  
 