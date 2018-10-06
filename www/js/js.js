//javascript to retrieve "map" id and then insert innerhmtl elements
document.getElementById("main").innerHTML = `
<header>Charge4lyfe</header>
    <div class="container">
        <h1><button onclick="stateFunction()">Select State</button></h1>
        <h1><button onclick="mapFunction()">Find location on Map</button></h1>
    </div>
`
document.getElementById("about").innerHTML= `
<div class="info">
    <h1><button onclick="infoFunction()">About</button></h1>
`
//js to display the list of states and link to go back home
function stateFunction() {
    document.getElementById("main").innerHTML =`
<header>Charge4Lyfe</header>
 <h3>Select State/Territory</h3>
<div id="hover" class="list">
    <ul class="lyst" >
    <li><button onclick="ntFunction()">Northern Territory</button></li>
    <li><button onclick="qldFunction()">Queensland</button>
    <li><button onclick="saFunction()">South Australia</button>
    <li><button onclick="tasFunction()">Tasmania</button>
    <li><button onclick="vicFunction()">Victoria</button>
    <li><button onclick="waFunction()">Western Australia</button>
    <li><button onclick="actFunction()">Australian Capital Territory</button>

</ul>
</div>
<h1><a href="index.html">Home</a></h1>
`
var el = document.getElementById('img1');
    el.parentNode.removeChild(el);
//js to add and event listener to change the background when the mouse hovers over the target button. Timeout function is very short at 50 milliseconds
var hover = document.getElementById("hover");
   hover.addEventListener("mouseover", function(event){
       event.target.style.background ="grey";
       setTimeout(function(){
           event.target.style.background ="";
       }, 50);
   }, false);
}

//function to display the map_header and Home link within the body tag
function ntFunction() {
    document.getElementById("body").innerHTML =  `
<div class="map_header">
<map_header>Charge4Lyfe</map_header>
</div>
<div id="map"></div>
<h2><a href="index.html">Home</a></h2>

`
//function to initialize the map and fetch markers from a Json file. The markers are then plotted on the map.
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: -12.37, lng: 130.87},
    zoom: 12
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
initMap();
}

//function to execute find location on map button. This will render the map with users location
function mapFunction(){
    document.getElementById("body").innerHTML=`
<div class="map_header">
<map_header>Charge4Lyfe</map_header>
</div>
<div id="map"></div>
<h2><a href="index.html">Home</a></h2>

`
var map;
function initMap() {
  map = new google.maps.Map(
    document.getElementById("map"),
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
initMap();  
function addMarker(lat, lng) {
  var marker = new google.maps.Marker({position: {lat: lat, lng: lng}, map: map});
  return marker;
}
}
