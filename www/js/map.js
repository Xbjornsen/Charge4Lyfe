var map;
function initMap() {
  map = new google.maps.Map(
    document.getElementById('map'),
    {
      center: {
        lat: -12.37,
        lng: 130.87
      },
      zoom: 10
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

//var locations = [
//    ['Charles Darwin University', -12.374604, 130.869585],
//    ['Fannie bay', -12.440389, 130.839916],
//    ['Darwin City Edge', -12.455033, 130.836709],

//  ];



