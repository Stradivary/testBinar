'use strict';  
 /**  
  * @ngdoc function  
  * @name simpleAngularApp.controller:MainCtrl  
  * @description  
  * # MainCtrl  
  * Controller of the simpleAngularApp  
  */  
 angular.module('simpleAngularApp')  
  .controller('MainCtrl', ['$scope','$uibModal','$log','authService','$localStorage','$location','$window',MainCtrl]) 
  function MainCtrl($scope,$uibModal,$log,authService,$localStorage,$location,$window){  

   $scope.animationsEnabled = true;   

  $scope.submit = function (email,password) {

    if(email == undefined || email == ""){

    } else if(password == undefined || password == ""){

    }else{
      authService.login(email,password).then(
        function(response){
          $localStorage.accessToken = response.data.access_token;
          var token = $window.localStorage.getItem('ngStorage-accessToken')
          if(token != undefined && token != ""){
            $location.path('/home')
          }
          
        }
      )

    }

  }

  $scope.register = function(){
    $location.path('/register');
    console.log('masuk')
  }
 } 