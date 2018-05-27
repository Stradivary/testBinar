'use strict';  
 /**  
  * @ngdoc function  
  * @name simpleAngularApp.controller:MainCtrl  
  * @description  
  * # MainCtrl  
  * Controller of the simpleAngularApp  
  */  
 angular.module('simpleAngularApp')  
  .controller('RegisterCtrl', ['$scope','CONF','$uibModal','$log','authService','$location','messageService',RegisterCtrl]); 
  function RegisterCtrl($scope,CONF,$uibModal,$log,authService,$location,messageService){  
  
   $scope.animationsEnabled = true; 
   var self = $scope; 

 $scope.back = function(){
   history.back();
 }
 $scope.credential ={};

  $scope.save = function (name,email,password) {

    var params = {
      "name":name,
      "email":email,
      "password":password
    }
    

    if(self.name == undefined || self.name == ""){
      messageService.toasterMessage(CONF.TOASTER_TOP_CENTER,CONF.TOASTER_ERROR,"Nama Harus di Isi");
    } else if(self.email == undefined || self.email == ""){
      messageService.toasterMessage(CONF.TOASTER_TOP_CENTER,CONF.TOASTER_ERROR,"Email Harus di Isi");
    }else if(self.password == undefined || self.password == ""){
      messageService.toasterMessage(CONF.TOASTER_TOP_CENTER,CONF.TOASTER_ERROR,"Password Harus di Isi");
    }
    else{   
      
        authService.register(params).then(
        function(response){
          messageService.toasterMessage(CONF.TOASTER_TOP_CENTER,CONF.TOASTER_SUCCESS,"Register Berhasil!");
            $location.path('/login')


        }
      )
      
    }

  }
}
  
 