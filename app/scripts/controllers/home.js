'use strict';  
 /**  
  * @ngdoc function  
  * @name simpleAngularApp.controller:MainCtrl  
  * @description  
  * # MainCtrl  
  * Controller of the simpleAngularApp  
  */  
 angular.module('simpleAngularApp')  
  .controller('HomeCtrl', ['$scope','$uibModal','$log','authService','$location','$localStorage','$window','$interval',HomeCtrl]); 
  function HomeCtrl($scope,$uibModal,$log,authService,$location,$localStorage,$window,$interval){  
  
   $scope.animationsEnabled = true;  

 $scope.back = function(){ 
   history.back();
 }


 
 function getAllAccont(){
   
   authService.getAccount().then(
     function(response){
       $scope.getAllAccount = response.data;
       console.log(response.data)
       
     }
   )
 }
 getAllAccont();


 

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
  
 