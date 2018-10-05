document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelectorAll('#map').length > 0)
  {
    if (document.querySelector('html').lang)
      lang = document.querySelector('html').lang;
    else
      lang = 'en';

    var js_file = document.createElement('script');
    js_file.type = 'text/javascript';
    js_file.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBhpYHAVTTZHo2vkGuIbVxhzFviSnas4k8&callback=initMap&signed_in=true&language=' + lang;
    document.getElementsByTagName('head')[0].appendChild(js_file);
  }
});


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -12.37, lng: 130.87},
    zoom: 8
  });
    fetch('markers.json')
  .then(function(response){return response.json()})
  .then(plotMarkers);
    var markers;
var bounds;

function plotMarkers(m)
{
  markers = [];
  bounds = new google.maps.LatLngBounds();

  m.forEach(function (marker) {
    var position = new google.maps.LatLng(marker.lat, marker.lng);

    markers.push(
      new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP
      })
    );

    bounds.extend(position);
  });

  map.fitBounds(bounds);
}

var position = new google.maps.LatLng(this.lat, this.lng);

markers.push(
  new google.maps.Marker({
    position: position,
    map: map,
    animation: google.maps.Animation.DROP
  })
);

bounds.extend(position);
}