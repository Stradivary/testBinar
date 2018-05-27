'use strict';

angular.module('simpleAngularApp')
  .constant('CONF',
    {

        'MASTER_PATH'                                   :'http://polls.apiblueprint.org/',

        //POST
        'URL_LOGIN'                                     : 'auth/login',
        'URL_REGISTER'                                  : 'auth/signup',
        
        

        // GET
        'URL_SHOW_DATA'                                  : 'v1/products',


    

        // Others
        'accessToken'                                   : 'access_token',
        'REGEX_PASSWORD'                                : /^(?=.*\d)(?=.*[a-zA-Z])(?!.*\s).{8,}$/,
        'REGEX_FOLDER_FILE_NAME'                        : /^[^\\\/\?\*\"\'\>\<\:\|]*$/,
        // 'REGEX_EMAIL'                                   : /^[a-z]+[a-z0-9._]+@[a-z-._]+\.[a-z.]{1,50}$/,
        'REGEX_EMAIL'                                   : /[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]/,
        'REGEX_EMAIL_URL'                               : /(https:\/\/)?(([^.]+)\.)/,
        'REGEX_NUMBERONLY'                              : /^[0-9]*$/,
        'TIMEOUT'                                       : 20000,
        'TIMEOUTFILE'                                   : 100000,

        //TOASTER
        'TOASTER_BOTTOM_FULL'               : 'toast-bottom-full-width',
        'TOASTER_TOP_FULL'                  : 'toast-top-full-width',
        'TOASTER_TOP_CENTER'                : 'toast-top-center',
        'TOASTER_TOP_RIGHT'                 : 'toast-top-right',
        'TOASTER_SUCCESS'                   : 'success',
        'TOASTER_ERROR'                     : 'error',
        'TOASTER_LANGUAGE_ID'               : '?lang=IN_ID',
        'TOASTER_LANGUAGE_US'               : '?lang=US',


    }
);
