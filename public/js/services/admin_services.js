// public/js/services/admin_services.js

angular.module('AdminService', [])
  .factory('admin', ['$http', function($http) {
    return {
      // get bikes
      getBikes: function() {
        return $http.get('/bikes');
      },
      // add bike
      addBike: function(data) {
        return $http.post('/add-bike', data);
      },
      // update bike
      updateBike: function(data) {
        return $http.post('/update-bike', data);
      },
      // delete bike
      removeBike: function(data) {
        return $http.post('/delete-bike', data);
      }
    };
  }]);
