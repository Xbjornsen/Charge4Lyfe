//js to drop markers at the charging station locations, Something is wrong with the code, sometimes it only drops two markers, i got some of the code from https://developers.google.com/maps/documentation/javascript/examples/icon-simple


 

  var map;
  var mark;
  function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {lat: -12.37, lng: 130.87}
    });
    
      var chargeStations = [
                            {lat: -12.374604, lng:  130.869585},
                            {lat: -12.440389, lng:  130.839916},
                            {lat: -12.455033, lng:  130.836709},
  ];
      
      
      for (var i = 0; i<chargeStations.length; i++){
      mark = new google.maps.Marker({
         position : chargeStations[i],
          map: map,
          animation: google.maps.Animation.DROP,
         title: "hiiii"
     });
  }


  }

mark.setMap(map);


