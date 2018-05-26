'use strict';  
 /**  
  * @ngdoc function  
  * @name simpleAngularApp.controller:MainCtrl  
  * @description  
  * # MainCtrl  
  * Controller of the simpleAngularApp  
  */  
 angular.module('simpleAngularApp')  
  .controller('RegisterCtrl', ['$scope','$uibModal','$log','authService','$location',RegisterCtrl]); 
  function RegisterCtrl($scope,$uibModal,$log,authService,$location){  
  
   $scope.animationsEnabled = true;  

 $scope.back = function(){
   history.back();
 }
 $scope.credential ={};
  $scope.save = function (name,email,password) {
    console.log(name)

    if(name == undefined || name == ""){

    } else if(email == undefined || email == ""){

    }else if(password == undefined || password == ""){

    }
    else{
      // var payload = new FormData();
      // payload.set("name", name);
      // payload.set('email', email);
      // payload.set('password', password);
      

        authService.register(name,email,password).then(
        function(response){

            $location.path('/login')


        }
      )
      
    }

  }
}
  
 