'use strict';

/**
 * @ngdoc function
 * @name volontarioWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the volontarioWebApp
 */
angular.module('volontarioWebApp')
  .controller('MainCtrl', function ($scope) {
	
  $scope.lat ='60.173324418807134';
  $scope.long = '24.941024799999923';
  var myLatlng = new google.maps.LatLng($scope.lat, $scope.long);

  function initialize() {
        var mapOptions  = {
          center: myLatlng,
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: true,
          scrollwheel: false,
        };
        var map = new google.maps.Map(document.getElementById('map'),
            mapOptions);
        $scope.map = map;
      }
      initialize();
  });
