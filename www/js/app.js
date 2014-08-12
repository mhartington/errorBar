// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova.plugins.statusbar'])

.run(function($ionicPlatform, $cordovaStatusbar) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    $cordovaStatusbar.style(1);

  });
})

.controller('MainCtrl',function($scope, $cordovaStatusbar, $timeout) {
    $scope.data = {
      isLoading: false
    };


       $scope.toggleError = function(){
        $cordovaStatusbar.hide();
        $scope.data.isLoading = true;

        $timeout( function(){
          $scope.data.isLoading = false;
          $cordovaStatusbar.show();
        }, 3000);
   };



  });
