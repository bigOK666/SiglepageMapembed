'use strict';
/*golbal Google*/
angular.module('generateApp')

.controller('inputController', ['$scope', function($scope) {
        $scope.titlevalue = 'Title';
        $scope.addressvalue = 'Munich, Germany';
        $scope.heightvalue = '500';
        $scope.widthvalue = '380';
        
//google maps

        var geocoder = new google.maps.Geocoder();
        var mapProp = {
            zoom:10,
            center: new google.maps.LatLng(48.1351253, 11.581980599999952),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        $scope.map = new google.maps.Map(document.getElementById('Nmap'), mapProp);
        
        var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(48.1351253,11.581980599999952)
            });
        var infowindow = new google.maps.InfoWindow({
                content:'<strong>' + $scope.titlevalue + '</strong>' + '<br>' + $scope.addressvalue + '<br>' //Home 地址要改
            });

        var geocodeAddress = function(geocoder, resultsMap){
            geocoder.geocode({'address': $scope.addressvalue}, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                resultsMap.setCenter(results[0].geometry.location);
                
                var marker = new google.maps.Marker({
                    map: resultsMap,
                    position: results[0].geometry.location
                });
                
                if (infowindow) {
                    infowindow.close();
                }
                infowindow = new google.maps.InfoWindow({
                    content:'<strong>' + $scope.titlevalue + '</strong><br>' + $scope.addressvalue + '<br>Lat:' + results[0].geometry.location.lat() + '<br>Lng:' + results[0].geometry.location.lng()
                });
                google.maps.event.addListener(marker, 'click', function(){
                    infowindow.open(resultsMap,marker);});
                infowindow.open(resultsMap,marker);

                
                
                
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
  });
            
        };

        google.maps.event.addListener(marker, 'click', function(){
                $scope.infowindow.open(map,marker);});
        infowindow.open($scope.map,marker);


        
        document.getElementById('getCode').addEventListener('click', function() {
            geocodeAddress(geocoder, $scope.map);

        });




        

        

//end google maps

    }]);