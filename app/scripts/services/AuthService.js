'use strict';

/**
 * @ngdoc service
 * @name simpleAngularApp.auth
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

            var url = $location.absUrl().split('?')[0];

            var regex_url = /(https:\/\/)?(([^.]+)\.)/;
            var regex_false_url = /(http:\/\/)?(([^.]+))/;

            var urls = "https://developer.dutfin.net/api-sandbox/v1";


            if((regex_url.exec(url)) != null){
                    $localStorage.url_host = urls;
                    
            } 


            var authenticate = function () {
                var accessToken = $localStorage.accessToken;
                return (accessToken != null);
            };
            var fullName = function () {
                var fullName = $localStorage.fullName;
                return fullName;
            };
            var email = function () {
                var email = $localStorage.email;
                return email;
            };

            return {
                getFullName:fullName,
                isAuthenticated: authenticate,
                getEmail : email,


                login: function (email,password) {
                    var deferred = $q.defer();
                    $http({
                        method: 'POST',
                        url: urls + CONF.URL_LOGIN,
                        timeout: CONF.TIMEOUT,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        data: $.param({email:email,
                            password:password})
                    }).then(function successCallback(response) {
                        $localStorage.accessToken = response.access_token;
                        
                            deferred.resolve(response);
                       
                        

                    }), function errorCallback(response){

                    }

                    return deferred.promise;
                },

                register: function (name,email,password) {
                    var deferred = $q.defer();
                    $http({
                        method: 'POST',
                        url: urls + CONF.URL_REGISTER,
                        timeout: CONF.TIMEOUT,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        data: $.param({name:name,
                            email:email,
                            password:password})
                    }).then(function successCallback(response) {    
                        deferred.resolve(response);

                    }), function errorCallback(response){
                        
                    }

                    return deferred.promise;
                },

                getAccount:function(){
                    var deferred = $q.defer();
                    var access_token = $localStorage.accessToken;
                    $http({
                        method:'GET',
                        url: urls + CONF.URL_GET_ACCOUNTS,
                        timeout:CONF.TIMEOUT,
                        headers:{'Content-Type': 'application/json',Authorization: 'Bearer '+ access_token},
                    }).then(function successCallback(response) {    
                        deferred.resolve(response);

                    }), function errorCallback(response){
                        
                    }

                    return deferred.promise;
                },

                getDetailAccount:function(accnumber){
                    var deferred = $q.defer();
                    var access_token = $localStorage.accessToken;
                    $http({
                        method:'GET',
                        url: urls + CONF.URL_GET_ACCOUNT + '/' + accnumber + CONF.URL_GET_DETAIL_ACCOUNT,
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