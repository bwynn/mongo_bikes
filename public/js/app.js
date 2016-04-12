// public/js/app.js

angular.module('bikeApp', ['ngRoute', 'ngAnimate', 'angular-filepicker', 'AppRoutes', 'AdminService', 'AdminController', 'AdminBikeController'])
  .config(function(filepickerProvider) {
    filepickerProvider.setKey('AjgLIPAdhTVu5fIVwhuahz');
  });
