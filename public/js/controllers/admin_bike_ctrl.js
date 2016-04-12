angular.module('AdminBikeController', [])
  .controller('adminBikeCtrl', ['$scope', 'admin', function($scope, admin) {
    admin.getBike().then(function(data) {
      $scope.bike = data;
    });
  }]);
