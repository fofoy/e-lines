$(function(){

	//Tableau du style de la map (couleurs)
        var styles = [
    {
      stylers: [
        { hue: "#00ffe6" },
        { saturation: -20 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      stylers: [
        { visibility: "off" }
      ]
    },{
     featureType: "water",
       stylers: [
      { "invert_lightness": true },
      { "lightness": -75 },
      { "visibility": "on" }
    ]
    },{
      "featureType": "administrative",
      "stylers": [
       { "visibility": "off" }
    ]
  }
  ]; //fin tableau



        var styledMap = new google.maps.StyledMapType(styles,
            {name: "Styled Map"});

        var mapOptions = {
          center: new google.maps.LatLng(41.38254, -12.362804),
          zoom: 2,
          disableDefaultUI: true,/*
          panControl: false,
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          overviewMapControl: false,*/
          mapTypeControlOptions: {
             mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
          }
        };

        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');

        /*
        var marker = new google.maps.Marker({
          position: map.getCenter(),
          map: map,
          animation: google.maps.Animation.DROP,
          title: 'Click to zoom'
        });
        */

        //Tableau de données à mettre dans une boucle
        var locs = [ ["-28.0172605", "153.4256987", "Gold Coast", "content", ".marker1"], ["38.2567969", "-85.7408659", "Louisville Extreme Park", "content2", ".marker2"], ["51.086126", "-2.210767", "TEST3", "content3", ".marker3"]];
        var image = 'img/pin.png';
                this.markers = new Array();
                for (var i = 0; i < locs.length; i++) {
                  createMarker(i);
                }
                function createMarker(i) {
                  var marker = new google.maps.Marker({
                      map: map,
                      position: new google.maps.LatLng(locs[i][0], locs[i][1]),
                      animation: google.maps.Animation.DROP,
                      title: locs[i][2],
                      icon: image
                  });
                  /*var infowindow = new google.maps.InfoWindow({
                      content: locs[i][3]
                  });*/
                  google.maps.event.addListener(marker, 'click', function() {
                  map.setCenter(marker.getPosition());
                  for (var j = 0; j < locs.length; j++) {
                    $(locs[j][4]).hide();
                    }
                      $(locs[i][4]).slideToggle(); // affiche la div video du marker
                  });
                }
});