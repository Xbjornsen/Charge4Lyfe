//js to drop markers at the charging station locations, Something is wrong with the code, sometimes it only drops two markers, i got some of the code from https://developers.google.com/maps/documentation/javascript/examples/icon-simple

var map;
function initMap() {
  map = new google.maps.Map(
    document.getElementById('map'),
    {
      center: {
        lat: -19.258965,
        lng: 146.816956
      },
      zoom: 12
     }
  );
  var marker = null;
navigator.geolocation.getCurrentPosition(
  function(position) {
    marker = 
    addMarker(position.coords.latitude, position.coords.longitude);
    }
  );
  navigator.geolocation.watchPosition(
  function(position) {
    moveMarker(
      marker,
      position.coords.latitude, 
      position.coords.longitude);
    }
  );
}
function addMarker(lat, lng) {
  var marker = new google.maps.Marker({position: {lat: lat, lng: lng}, map: map});
  return marker;
}


function moveMarker(marker, lat, lng) {
  marker.setPosition({lat: lat, lng: lng});
  return marker;
}
