// public/js/app.js

angular.module('bikeApp', ['ngRoute', 'ngAnimate', 'angular-filepicker', 'AppRoutes', 'AdminService', 'AdminController'])
  .config(function(filepickerProvider) {
    filepickerProvider.setKey('AjgLIPAdhTVu5fIVwhuahz');
  });
