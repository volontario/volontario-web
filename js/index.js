$("#top").lettering();
$("#bottom").lettering();
 
    var map = new google.maps.Map(document.getElementById("map"),{
       center: new google.maps.LatLng(60.173, 24.94),
       zoom: 13,
       mapTypeId: google.maps.MapTypeId.ROADMAP,
       disableDefaultUI: true,
       styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
 })


 // Set marker also
 var infowindow = new google.maps.InfoWindow({
  content: "content"
 })
 ;
 var marker = new MarkerWithLabel({
 position: new google.maps.LatLng(60.173, 24.94),  map: map,
 title: 'title',
 icon: ' ',
 labelContent: '<span class="ion-android-train"></span><span class="icon ion-happy-outline activity"></span><span class="icon battery"><span class="ion-flash-off"></span></span></span><svg class="svgprogress" width="36" height="36" xmlns="http://www.w3.org/2000/svg"><g><circle id="circle_0" class="circle_animation" r="16" cy="18" cx="18" fill="none"/></g></svg>',
 labelAnchor: new google.maps.Point(18, 18),
 labelClass: 'labels has-job dark',
 html: '<div class="frame"><h1>Parkkitilaa jäljellä</h1>Voit varata parkkipaikan itsellesi,<br> käyttämättömistä parkkipaikoista voidaan laskuttaa<br><button class="btn">Varaa parkkipaikka</button></div>'                       
 });

var markerCar = new MarkerWithLabel({
 position: new google.maps.LatLng(60.193, 24.94),  
 map: map,
 title: 'title',
 icon: ' ',
 labelContent: '<span class="ion-model-s"></span><span class="icon ion-happy-outline activity"></span><span class="icon battery"><span class="ion-flash-off"></span></span></span><svg class="svgprogress" width="36" height="36" xmlns="http://www.w3.org/2000/svg"><g><circle id="circle_0" class="circle_animation" r="16" cy="18" cx="18" fill="none"/></g></svg>',
 labelAnchor: new google.maps.Point(18, 18),
 labelClass: 'labels has-job dark',
 html: '<div class="frame"><h1>Parkkitilaa jäljellä</h1>Voit varata parkkipaikan itsellesi,<br> käyttämättömistä parkkipaikoista voidaan laskuttaa<br><button class="btn">Varaa parkkipaikka</button></div>'                       
 });

  google.maps.event.addListener(marker, 'click', function() {  infowindow.setContent(this.html);  infowindow.open($scope.map,this);
 });