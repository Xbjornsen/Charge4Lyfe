document.getElementById("map").innerHTML = `
<header>Charge4lyfe</header>
    <div class="container">
        <h1><button onclick="stateFunction()">Select State</button></h1>
        <h1><button onclick="mapFunction()">Find location on Map</button></h1>
    </div>
`
function stateFunction() {
    document.getElementById("map").innerHTML =`
<header>Charge4Lyfe</header>
 <h3>Select State/Territory</h3>
<div id="hover" class="list">
    <ul class="lyst" >
    <li><button onclick="ntFunction()">NT</button></li>
    <li><a href="qld.html" >Queensland</a></li>
    <li><a href="sa.html" >South Australia</a></li>
    <li><a href="#">Tasmania</a></li>
    <li><a href="#">Victoria</a></li>
    <li><a href="#">Western Australia</a></li>
    <li><a href="#">Austalian Capital Territory</a></li>

</ul>
</div>
<h1><a href="index.html">Home</a></h1>
`
var hover = document.getElementById("hover");
   hover.addEventListener("mouseover", function(event){
       event.target.style.background ="grey";
       setTimeout(function(){
           event.target.style.background ="";
       }, 200);
   }, false);
}

function ntFunction() {
    document.getElementById("body").innerHTML =  `
<div class="map_header">
<map_header>Charge4Lyfe</map_header>
</div>
<div id="map"></div>
<h2><a href="index.html">Home</a></h2>
<h2><button onclick="BackFunction()">Back to Select State</button</h2>
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


function moveMarker(marker, lat, lng) {
  marker.setPosition({lat: lat, lng: lng});
  return marker;
}

}

function mapFunction(){
    document.getElementById("body").innerHTML=`
<div class="map_header">
<map_header>Charge4Lyfe</map_header>
</div>
<div id="map"></div>
<h2><a href="index.html">Home</a></h2>
<h2><button onclick="stateFunction()">Back to Select State</button</h2>
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
