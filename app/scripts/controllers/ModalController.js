/**
 * Created by Ahmad Muzaki on 26/05/18.
 */
angular.module('simpleAngularApp')
    .controller('ModalCtrl', [
        '$scope',
        '$http',
        '$window',
        '$location',
        'modalParam',
        '$uibModalInstance',
        '$uibModal',
        '$localStorage',
        'messageService',
        'authService',
        'CONF',
        ModalCtrl
    ]);

function ModalCtrl($scope,$http,
    $window, $location, modalParam,$uibModalInstance, $uibModal, $localStorage, messageService,authService, CONF) {

    var self = $scope;

    self.modalParam = modalParam;


    self.editProduk = function(test) {
       
        var edit = {
            "name": test.name,
            "price": parseInt(test.price),
            "imageurl": test.imageurl,
        }

        if (self.modalParam.name == undefined && self.modalParam.price == undefined && self.modalParam.imageurl == undefined) {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Semua inputan harus di isi');
        } else if (self.modalParam.name == undefined || self.modalParam.name == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Nama Produk harus di isi');
        } else if (self.modalParam.price == undefined || self.modalParam.price == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Harga harus di Isi');
        } else if (self.modalParam.imageurl == undefined || self.modalParam.imageurl == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Nama Belakang harus di isi');
        } else {
            authService.editProduk(edit, test.id).then(
                function(response) {
                    if (response.message !== 'ERROR') {
                        messageService.toasterMessage(CONF.TOASTER_TOP_CENTER, CONF.TOASTER_SUCCESS, "Produk Berhasil di Update");
                        $uibModalInstance.close();
                        
                    } else {
                        messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, response.result);
                    }

                }
            );
        }
    }

    self.close = function(){
     $uibModalInstance.close();}

    self.deleteProduk = function (test){
        authService.deleteProduk(test.id).then(
            function(response){
                messageService.toasterMessage(CONF.TOASTER_TOP_CENTER, CONF.TOASTER_SUCCESS, "Produk Berhasil di Delete");
                $uibModalInstance.close();
            }
        )
    }

    self.addProduk = function(test) {
        var add = {
            "name": test.name,
            "price": test.price,
            "imageurl": test.imageurl,
        }
        if (self.modalParam.name == undefined && self.modalParam.price == undefined && self.modalParam.imageurl == undefined) {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Semua inputan harus di isi');
        } else if (self.modalParam.name == undefined || self.modalParam.name == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Nama Produk harus di isi');
        } else if (self.modalParam.price == undefined || self.modalParam.price == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Harga harus di Isi');
        } else if (self.modalParam.imageurl == undefined || self.modalParam.imageurl == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'URL Image harus di isi');
        } else {
            authService.addProduk(add).then(
                function(response) {
                    if (response.message !== 'ERROR') {
                        messageService.toasterMessage(CONF.TOASTER_TOP_CENTER, CONF.TOASTER_SUCCESS, "Produk Berhasil diTambahkan");
                
                        $uibModalInstance.close({
                            resolve: {
                                modalParam: function() {
                                    return {
                                        title: 'Gagal',
                                        message: response.result,
                                        path: ''
                                    };
                                }
                            }
                        });
                      
                    } else {
                        messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, response.result);
                    }

                }
            );
        }
    }

    var paramId = $location.search().id;

    function close() {
        $uibModalInstance.close();
        if (self.modalParam.path) {

            if (self.modalParam.path == 'reload') {
                window.location.reload();
            } else {
                $location.path(self.modalParam.path);
            }
        }
    }
};