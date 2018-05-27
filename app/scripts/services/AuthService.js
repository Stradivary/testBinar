'use strict';

/**
 * @ngdoc service
 * @name simpleAngularApp.authService
 * @description
 * # auth
 * Service in the simpleAngularApp.
 */
angular.module('simpleAngularApp')
    .service('authService', [
        '$http',
        '$q',
        'CONF',
        '$localStorage',
        '$location',
        
        function ($http, $q, CONF, $localStorage, $location) {

            var urls = "https://test-binar.herokuapp.com/";

            return {

                login: function (paramLogin) {
                    var deferred = $q.defer();
                    $http({
                        method: 'POST',
                        url: urls + CONF.URL_LOGIN,
                        timeout: CONF.TIMEOUT,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        data: paramLogin
                    }).then(function successCallback(response) {
                        $localStorage.accessToken = response.access_token;
                        
                            deferred.resolve(response);
                       
                        

                    }), function errorCallback(response){

                    }

                    return deferred.promise;
                },

                register: function (paramRegister) {
                    var deferred = $q.defer();

                    $http({
                        method: 'POST',
                        url: urls + CONF.URL_REGISTER,
                        timeout: CONF.TIMEOUT,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        data:paramRegister
                    }).then(function successCallback(response) {    
                        deferred.resolve(response);

                    }), function errorCallback(response){
                        
                    }

                    return deferred.promise;
                },

                addProduk: function (paramAdd) {
                    var deferred = $q.defer();
                    var access_token = $localStorage.accessToken;
                    $http({
                        method: 'POST',
                        url: urls + CONF.URL_SHOW_DATA,
                        timeout: CONF.TIMEOUT,
                        headers:{'Content-Type': 'application/json',Authorization: 'Bearer '+ access_token},
                        data:paramAdd
                    }).then(function successCallback(response) {    
                        deferred.resolve(response);

                    }), function errorCallback(response){
                        
                    }

                    return deferred.promise;
                },


                editProduk: function (paramEdit,id) {
                    var deferred = $q.defer();
                    var access_token = $localStorage.accessToken;
                    $http({
                        method: 'PUT',
                        url: urls + CONF.URL_SHOW_DATA +'/'+id,
                        timeout: CONF.TIMEOUT,
                        headers:{'Content-Type': 'application/json',Authorization: 'Bearer '+ access_token},
                        data:paramEdit
                    }).then(function successCallback(response) {    
                        deferred.resolve(response);

                    }), function errorCallback(response){
                        
                    }

                    return deferred.promise;
                },


                deleteProduk: function (id) {
                    var deferred = $q.defer();
                    var access_token = $localStorage.accessToken;
                    $http({
                        method: 'DELETE',
                        url: urls + CONF.URL_SHOW_DATA +'/'+id,
                        timeout: CONF.TIMEOUT,
                        headers:{'Content-Type': 'application/json',Authorization: 'Bearer '+ access_token},
                    }).then(function successCallback(response) {    
                        deferred.resolve(response);

                    }), function errorCallback(response){
                        
                    }

                    return deferred.promise;
                },

                getData:function(){
                    var deferred = $q.defer();
                    var access_token = $localStorage.accessToken;
                    $http({
                        method:'GET',
                        url: urls + CONF.URL_SHOW_DATA,
                        timeout:CONF.TIMEOUT,
                        headers:{'Content-Type': 'application/json',Authorization: 'Bearer '+ access_token},
                    }).then(function successCallback(response) {    
                        deferred.resolve(response);

                    }), function errorCallback(response){
                        
                    }

                    return deferred.promise;
                },

                getDetailProduct:function(id){
                    var deferred = $q.defer();
                    var access_token = $localStorage.accessToken;
                    $http({
                        method:'GET',
                        url: urls + CONF.URL_SHOW_DATA + '/' + id,
                        timeout:CONF.TIMEOUT,
                        headers:{'Content-Type': 'application/json',Authorization: 'Bearer '+ access_token},
                    }).then(function successCallback(response) { 

                        deferred.resolve(response);

                    }), function errorCallback(response){
                        
                    }

                    return deferred.promise;
                }
            };
        }]);