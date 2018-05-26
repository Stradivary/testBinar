'use strict';

/**
 * @ngdoc service
 * @name simpleAngularApp.messageService
 * @description
 * # auth
 * Service in the simpleAngularApp.
 */
angular.module('simpleAngularApp')
    .service('messageService', [
        '$http',
        '$q',
        'CONF',
        function ($http, $q, CONF) {

            return {
                toasterMessage: function (position,type,message) {
                    toastr.options = {
                        "closeButton": true,
                        "debug": false,
                        "newestOnTop": false,
                        "progressBar": false,
                        "positionClass": position,
                        "preventDuplicates": false,
                        "onclick": null,
                        "showDuration": "300",
                        "hideDuration": "1000",
                        "timeOut": "2000",
                        "extendedTimeOut": "1000",
                        "showEasing": "swing",
                        "hideEasing": "linear",
                        "showMethod": "fadeIn",
                        "hideMethod": "fadeOut",
                    };
                    toastr[type](message);
                }
            };

        }]);