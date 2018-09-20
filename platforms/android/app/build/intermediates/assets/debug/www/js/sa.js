
var map;
function initMap() {
  map = new google.maps.Map(
    document.getElementById('map'),
    {
      center: {
        lat: -34.9285,
        lng: 138.6007
      },
      zoom: 10
     }
  );
}

