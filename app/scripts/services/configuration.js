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
        'privileges'                                    : 'privileges',
        'menu'                                          : 'menu',
        'fullName'                                      : 'fullName',
        'REGEX_PASSWORD'                                : /^(?=.*\d)(?=.*[a-zA-Z])(?!.*\s).{8,}$/,
        'REGEX_FOLDER_FILE_NAME'                        : /^[^\\\/\?\*\"\'\>\<\:\|]*$/,
        // 'REGEX_EMAIL'                                   : /^[a-z]+[a-z0-9._]+@[a-z-._]+\.[a-z.]{1,50}$/,
        'REGEX_EMAIL'                                   : /[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]/,
        'REGEX_EMAIL_URL'                               : /(https:\/\/)?(([^.]+)\.)/,
        'REGEX_PHONENUMBER'                             : /^08[0-9]{8,12}$/,
        'REGEX_IMAGEFILENAME'                           : /\.(gif|jpg|jpeg|tiff|png)$/i,
        'REGEX_TIME'                                    : /([01]\d|2[0-4]):([0-5]\d)/,
        'REGEX_NUMBERONLY'                              : /^[0-9]*$/,
        'COUNTER_FAILED'                                : 'counter_fail',
        'captcha_key'                                   : '6Lec_wsUAAAAAIOGMkmui2-h17X8RdUP6gXNQuMU',
        'domain'                                        : 'domain',
        'id'                                            : 'id',
        'domainId'                                      : 'domainId',
        'user'                                          : 'user',
        'stateLogin'                                    : 'stateLogin',
        'USER_INTERNAL'                                 : 'INTERNAL',
        'USER_NOTARY'                                   : 'NOTARY',
        'USER_EMAIL'                                    : 'email',
        'MAX_UPLOAD_FILE_AHU'                           : '10', // 10MB
        'TYPE_UPLOAD_FILE_AHU'                          : 'PDF', // 10MB
        'TIMEOUT'                                       : 20000,
        'TIMEOUTFILE'                                   : 100000,
        'DEFAULT_PATH_AVATAR'                           : '/images/avatar_default.png',
        'CONFIG_CREATE_PDF_WIDTH'                       : 500,
        'CONFIG_CREATE_PDF_HEIGHT'                      : 800,
        'URL_WS_NOTIFICATION'                           : '/notification',
        'WS_CHANNEL'                                    : '/topic/response',

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
