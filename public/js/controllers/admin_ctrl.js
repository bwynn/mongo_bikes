// public/js/controllers/admin_ctrl.js

angular.module('AdminController', [])
  .controller('adminCtrl', ['$scope', 'admin', 'filepickerService', function($scope, admin, filepickerService) {

    // new bike submission
    $scope.submit = function() {
      admin.addBike({
        bike_id: $scope.newBikeId,
        brand: $scope.brand,
        model: $scope.model,
        year: $scope.year,
        travel: $scope.travel,
        ht_ang: $scope.ht_ang,
        wh_base: $scope.wh_base,
        fs: $scope.fs,
        wh_size: $scope.wh_size,
        bike_img: $scope.bikeImage,

      }).then(function() {
        init();
      });
    };

    // remove bike
    $scope.deleteBike = function(unique_id) {
      console.log(unique_id);
      admin.removeBike({
        "id": unique_id
      }).then(function() {
        init();
      })
    };

    // upload picture of the bike using filepicker
    $scope.upload = function() {
      filepickerService.pick({
        mimetype: 'image/*',
        language: 'en',
        services: ['COMPUTER', 'DROPBOX', 'GOOGLE_DRIVE', 'IMAGE_SEARCH'],
        openTo: 'IMAGE_SEARCH'
      },
      function(Blob) {
        console.log(JSON.stringify(Blob));
        $scope.bikeImage = Blob;
        $scope.$apply();
      });
    };

    // get data from db and initialize controller
    function init() {
      admin.getBikes().then(function(bikes) {
        $scope.bikes = bikes.data;

        console.log(bikes.data);
      }).then(function() {
        setId();
        defaultVars(); // set and clear out any values expected to be empty on forms.
      });
    }

    // this takes the largest bike_id value found in the bikes collection and increments += 1
    function setId() {
      $scope.bike_ids = [];
      for (var i = 0; i < $scope.bikes.length; i++) {
        $scope.bike_ids.push($scope.bikes[i].bike_id);
      }
      // define new bike id value
      $scope.newBikeId = Math.max.apply(Math, $scope.bike_ids) + 1;
    }

    // set default values
    function defaultVars() {
      $scope.brand = "";
      $scope.model = "";
      $scope.year = "";
      $scope.travel = "";
      $scope.ht_ang = "";
      $scope.wh_base = "";
      $scope.fs = false;
      $scope.wh_size = "";
      $scope.bikeImage = {};
    }

    init();

  }]);
