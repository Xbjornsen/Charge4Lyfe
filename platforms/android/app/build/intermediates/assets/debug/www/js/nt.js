//js to drop markers at the charging station locations
function initAutocomplete() {
var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: -12.37, lng: 130.87},
  zoom: 13,
  mapTypeId: 'roadmap'
});

// Create the search box and link it to the UI element.
var input = document.getElementById('pac-input');
var searchBox = new google.maps.places.SearchBox(input);
map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

// Bias the SearchBox results towards current map's viewport.
map.addListener('bounds_changed', function() {
  searchBox.setBounds(map.getBounds());
});

var markers = [];
// Listen for the event fired when the user selects a prediction and retrieve
// more details for that place.
searchBox.addListener('places_changed', function() {
  var places = searchBox.getPlaces();

  if (places.length == 0) {
    return;
  }

  // Clear out the old markers.
  markers.forEach(function(marker) {
    marker.setMap(null);
  });
  markers = [];

  // For each place, get the icon, name and location.
  var bounds = new google.maps.LatLngBounds();
  places.forEach(function(place) {
    if (!place.geometry) {
      console.log("Returned place contains no geometry");
      return;
    }
    var icon = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };

    // Create a marker for each place.
    markers.push(new google.maps.Marker({
      map: map,
      icon: icon,
      title: place.name,
      position: place.geometry.location
    }));

    if (place.geometry.viewport) {
      // Only geocodes have viewport.
      bounds.union(place.geometry.viewport);
    } else {
      bounds.extend(place.geometry.location);
    }
  });
  map.fitBounds(bounds);
});
}

//  var image = 'https://github.com/Xbjornsen/HIT238_Charge4Lyfe/blob/master/image/7.png?raw=true';
//  var map;
//  var mark;
//  function initMap() {
//      map = new google.maps.Map(document.getElementById('map'), {
//      zoom: 12,
//      center: {lat: -12.37, lng: 130.87}
//    });
//
//      var chargeStations = [
//                            {lat: -12.374604, lng:  130.869585},
//                            {lat: -12.440389, lng:  130.839916},
//                            {lat: -12.455033, lng:  130.836709},
//                            {lat: -13.243830, lng:  131.112500},
//  ];
//    
//      
//      for (var i = 0; i<chargeStations.length; i++){
//      mark = new google.maps.Marker({
//         position : chargeStations[i],
//          map: map,
//          icon: image,
//          animation: google.maps.Animation.DROP,
//         title: "Electric Charge station"
//     });
//  }
//  var marker = null;
//navigator.geolocation.getCurrentPosition(
//  function(position) {
//    marker = 
//    addMarker(position.coords.latitude, position.coords.longitude);
//    }
//  );
//  navigator.geolocation.watchPosition(
//  function(position) {
//    moveMarker(
//      marker,
//      position.coords.latitude, 
//      position.coords.longitude);
//    }
//  );
//}
//function addMarker(lat, lng) {
//  var marker = new google.maps.Marker({position: {lat: lat, lng: lng}, map: map,
//                                       draggable: true,
//                                       title:"Your Location"
//    });
//  return marker;
//}
//
//
//function moveMarker(marker, lat, lng) {
//  marker.setPosition({lat: lat, lng: lng});
//  return marker;
//}
//
//
//mark.setMap(map);
//

