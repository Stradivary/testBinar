/**
 * Created by Ahmad Muzaki on 26/05/18.
 */
angular.module('simpleAngularApp')
    .controller('ModalCtrl', [
        '$scope',
        '$modalInstance',
        '$location',
        'modalParam',
        '$uibModal',
        '$localStorage',
        'messageService',
        'CONF',
        ModalCtrl
    ]);

function ModalCtrl($scope, $modalInstance, $location, modalParam, $uibModal, $localStorage, messageService, CONF) {

    var self = $scope;

    self.modalParam = modalParam;
    
    self.edit = function(test) {
        var edit = {
            "first_name": test.first_name,
            "last_name": test.last_name,
            "phone": test.phone,
            "version": test.version
        }
        console.log(edit);

        if (self.modalParam.username == undefined && self.modalParam.first_name == undefined && self.modalParam.last_name == undefined && self.modalParam.phone == undefined) {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Semua inputan harus di isi');
        } else if (self.modalParam.first_name == undefined || self.modalParam.first_name == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Nama Depan harus di isi');
        } else if (self.modalParam.last_name == undefined || self.modalParam.last_name == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Nama Belakang harus di isi');
        } else if (self.modalParam.phone == undefined || self.modalParam.phone == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Nomor Telepon harus di isi');
        } else if (self.modalParam.phone !== undefined && !CONF.REGEX_PHONENUMBER.test(self.modalParam.phone)) {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Nomor Telepon harus berisi 10 sampai 14 angka');
        } else {
            UserService.editUserSurveyor(edit, test.id).then(
                function(response) {
                    console.log(response)

                    $modalInstance.close();

                    // self.bigTotalItems = self.data.length;
                }
            );
        }
    }
    // ADD KEYWORD
    self.toAdd = function(){

        var modalInstance = $modal.open({
            templateUrl: 'views/modal/Modal.html',
            controller: 'KeywordAdministratorCtrl',
            backdrop: 'static',
            size: 'md',
            keyboard: false
        });

 }
         self.close = function(){
     $modalInstance.close();}
 // ADD KEYWORD
    self.add = function(test) {

        var edit = {
            "username": test.username,
            "first_name": test.first_name,
            "last_name": test.last_name,
            "phone": test.phone,
            "role": "S"
        }

        if (self.modalParam.username == undefined && self.modalParam.first_name == undefined && self.modalParam.last_name == undefined && self.modalParam.phone == undefined) {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Semua inputan harus di isi');
        } else if (self.modalParam.username == undefined || self.modalParam.username == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Email harus di isi');
        } else if (self.modalParam.username !== undefined && !CONF.REGEX_EMAIL.test(self.modalParam.username)) {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Format Email Salah');
        } else if (self.modalParam.first_name == undefined || self.modalParam.first_name == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Nama Depan harus di isi');
        } else if (self.modalParam.last_name == undefined || self.modalParam.last_name == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Nama Belakang harus di isi');
        } else if (self.modalParam.phone == undefined || self.modalParam.phone == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Nomor Telepon harus di isi');
        } else if (self.modalParam.phone !== undefined && !CONF.REGEX_PHONENUMBER.test(self.modalParam.phone)) {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Nomor Telepon harus berisi 10 sampai 14 angka');
        } else {
            UserService.addUserSurveyor(edit).then(
                function(response) {
                    if (response.message !== 'ERROR') {
                        messageService.toasterMessage(CONF.TOASTER_TOP_CENTER, CONF.TOASTER_SUCCESS, "Surveyor Berhasil diTambahkan");
                        console.log(response)
                        $modalInstance.close({
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
                        // self.bigTotalItems = self.data.length;
                    } else {
                        messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, response.result);
                    }

                }
            );
        }
    }

    self.addAdmin = function(test) {
        var edit = {
            "username": test.username,
            "first_name": test.first_name,
            "last_name": test.last_name,
            "phone": test.phone,
            "role": "A"
        }
        if (self.modalParam.username == undefined && self.modalParam.first_name == undefined && self.modalParam.last_name == undefined && self.modalParam.phone == undefined) {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Semua inputan harus di isi');
        } else if (self.modalParam.username == undefined || self.modalParam.username == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Email harus di isi');
        } else if (self.modalParam.username !== undefined && !CONF.REGEX_EMAIL.test(self.modalParam.username)) {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Format Email Salah');
        } else if (self.modalParam.first_name == undefined || self.modalParam.first_name == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Nama Depan harus di isi');
        } else if (self.modalParam.last_name == undefined || self.modalParam.last_name == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Nama Belakang harus di isi');
        } else if (self.modalParam.phone == undefined || self.modalParam.phone == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Nomor Telepon harus di isi');
        } else if (self.modalParam.phone !== undefined && !CONF.REGEX_PHONENUMBER.test(self.modalParam.phone)) {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Nomor Telepon harus berisi 10 sampai 14 angka');
        } else {
            UserService.addUserAdmin(edit).then(
                function(response) {
                    if (response.message !== 'ERROR') {
                        messageService.toasterMessage(CONF.TOASTER_TOP_CENTER, CONF.TOASTER_SUCCESS, "Admin Berhasil diTambahkan");
                        console.log(response)
                        $modalInstance.close({
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
                        // self.bigTotalItems = self.data.length;
                    } else {
                        messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, response.result);
                    }

                }
            );
        }
    }

    self.addProduk = function(test) {
        var add = {
            "name": test.name,
            "price": test.price,
            "imageurl": test.imageurl,
        }
        if (self.modalParam.username == undefined && self.modalParam.first_name == undefined && self.modalParam.last_name == undefined && self.modalParam.phone == undefined) {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Semua inputan harus di isi');
        } else if (self.modalParam.username == undefined || self.modalParam.username == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Email harus di isi');
        } else if (self.modalParam.username !== undefined && !CONF.REGEX_EMAIL.test(self.modalParam.username)) {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Format Email Salah');
        } else if (self.modalParam.first_name == undefined || self.modalParam.first_name == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Nama Depan harus di isi');
        } else if (self.modalParam.last_name == undefined || self.modalParam.last_name == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Nama Belakang harus di isi');
        } else if (self.modalParam.phone == undefined || self.modalParam.phone == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Nomor Telepon harus di isi');
        } else if (self.modalParam.phone !== undefined && !CONF.REGEX_PHONENUMBER.test(self.modalParam.phone)) {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Nomor Telepon harus berisi 10 sampai 14 angka');
        } else {
            AuthService.addProduk(add).then(
                function(response) {
                    if (response.message !== 'ERROR') {
                        messageService.toasterMessage(CONF.TOASTER_TOP_CENTER, CONF.TOASTER_SUCCESS, "Mitra Berhasil diTambahkan");
                        console.log(response)
                        $modalInstance.close({
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
                        // self.bigTotalItems = self.data.length;
                    } else {
                        messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, response.result);
                    }

                }
            );
        }
    }

    self.items = [{
        id: 'M',
        name: 'Motor',
    }, {
        id: 'C',
        name: 'Mobil',
    }, {
        id: 'B',
        name: 'Sepeda',
    }, {
        id: 'O',
        name: 'Lain-lain',
    }];

    self.modalParam.vehicle_type_name = self.items[0];

    self.setOrientation = function(item) {
        console.log(item)

    }

    self.addType = function(test) {
        var edit = {};

        if (self.modalParam.vehicle_type_name.name == "Motor") {
            edit.vehicle_type_name = "Motor";
            edit.vehicle_type = "M";
        } else if (self.modalParam.vehicle_type_name.name == "Mobil") {
            edit.vehicle_type_name = "Mobil";
            edit.vehicle_type = "C";
        } else if (self.modalParam.vehicle_type_name.name == "Sepeda") {
            edit.vehicle_type_name = "Sepeda";
            edit.vehicle_type = "B";
        } else if (self.modalParam.vehicle_type_name.name == "Lain-lain") {
            edit.vehicle_type_name = "Lain-lain";
            edit.vehicle_type = "O";
        }
        edit.capacity = test.capacity;
        edit.price = test.price;
        console.log(test.capacity)
        console.log(edit.vehicle_type_name)

        //       .indexOf()
        // var model = ["Motor","Car"];
        // model.indexOf(self.modalParam.vehicle_type_name)
        var check = self.modalParam.data;
        var type = new Array;
        for (var i = 0; i < check.length; i++) {
            type.push(check[i].vehicle_type_name);
            console.log(type)
            console.log(check[i].vehicle_type_name)
        }

        console.log(self.modalParam.data)

        if (self.modalParam.vehicle_type_name.name == undefined && self.modalParam.capacity == undefined && self.modalParam.price == undefined) {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Semua inputan harus di isi');
        } else if (self.modalParam.vehicle_type_name.name == undefined || self.modalParam.vehicle_type_name.name == '' || edit.vehicle_type_name == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Tipe Kendaraan tidak boleh kosong!');
        } else if (type.indexOf(self.modalParam.vehicle_type_name.name) > -1) {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Tipe Kendaraan tidak boleh sama!');
        } else if (self.modalParam.capacity == undefined || self.modalParam.capacity == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Kapasitas tidak boleh kosong!');
        } else if (self.modalParam.price == undefined || self.modalParam.price == '') {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Harga tidak boleh kosong!');
        } else if (!CONF.REGEX_NUMBERONLY.test(test.capacity)) {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Kapasitas Hanya Angka');
        } else if (!CONF.REGEX_NUMBERONLY.test(test.price)) {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Harga Hanya Angka');
        } else {
            console.log(edit);
            $modalInstance.close(edit);
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_SUCCESS, 'Berhasil Menambahkan');
        }
    }

    self.editType = function(test) {
        var edit = {};

        edit.capacity = self.modalParam.capacity;
        edit.price = self.modalParam.price;
        edit.vehicle_type = self.modalParam.vehicle_type;
        edit.vehicle_type_name = self.modalParam.vehicle_type_name.name;
        edit.index = self.modalParam.index;
        var parking = self.modalParam.parking_type_list;

        if (self.modalParam.vehicle_type_name.name == "Motor") {
            edit.vehicle_type_name = "Motor";
            edit.vehicle_type = "M";
        } else if (self.modalParam.vehicle_type_name.name == "Mobil") {
            edit.vehicle_type_name = "Mobil";
            edit.vehicle_type = "C";
        } else if (self.modalParam.vehicle_type_name.name == "Sepeda") {
            edit.vehicle_type_name = "Sepeda";
            edit.vehicle_type = "B";
        } else if (self.modalParam.vehicle_type_name.name == "Lain-lain") {
            edit.vehicle_type_name = "Lain-lain";
            edit.vehicle_type = "O";
        }

        var type = new Array;
        for (var i = 0; i < parking.length; i++) {
            type.push(parking[i].vehicle_type_name)
            console.log(parking[i].vehicle_type_name);
        };

        if (type.indexOf(edit.vehicle_type_name) > -1) {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Tipe Kendaraan tidak boleh sama!');
        } else if (edit.capacity == '' || edit.capacity == undefined) {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Kapasitas Harus di Isi');
        } else if (edit.price == '' || edit.price == undefined) {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Harga Harus di Isi');
        } else if (edit.vehicle_type_name == '' || edit.vehicle_type_name == undefined) {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, 'Tipe Kendaraan Harus di Isi');
        } else {
            messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_SUCCESS, 'Berhasil Edit Tipe');
            $modalInstance.close(edit);
        }
    }



    var paramId = $location.search().id;

    self.toList = function() {
        $location.path('/dashboard/parking-list').search({
            id: paramId
        });
    };

    self.toDelete = function() {

        ParkingService.deleteParkingLocation(paramId).then(
            function(response) {
                if (response.message !== 'ERROR') {
                    messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_SUCCESS, 'Berhasil Menghapus Lokasi Parkir');
                    self.toList();
                    $modalInstance.close();
                } else {
                    messageService.toasterMessage(CONF.TOASTER_TOP_RIGHT, CONF.TOASTER_ERROR, response.result);
                }
            }
        );
    };

    function close() {
        $modalInstance.close();
        if (self.modalParam.path) {

            if (self.modalParam.path == 'reload') {
                window.location.reload();
            } else {
                $location.path(self.modalParam.path);
            }
        }
    }
};