// public/js/app_routes.js

angular.module('AppRoutes', [])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    // enable html5 mode
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    // ng-view routes
    $routeProvider.
      when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'adminCtrl'
      }).
      otherwise({
        redirectTo: '/admin',
        controller: 'adminCtrl'
      });
  }]);
