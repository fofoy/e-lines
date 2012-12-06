$(function(){

// DEBUT GMAP
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
]; //fin style

var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

//Options map
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
    mapTypeControlOptions: {mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']}
};

var map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions); // Initialisation de la map
map.mapTypes.set('map_style', styledMap); // Application du style
map.setMapTypeId('map_style');

//Tableau des markers
var locs = [ ["-28.0172605", "153.4256987", "Gold Coast", "content", "2172780","4"], ["38.2567969", "-85.7408659", "Louisville Extreme Park", "content2", "2172803","4"], ["-1.426001", "98.9245343", "Mentawais Island", "content3", "2172879","3"]];
var image = 'img/pin.png';

//Ajout des markers
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

    //Importation des vidéo en rapport avec le lieu
    $.getJSON('http://vimeo.com/api/v2/album/' + locs[i][4] + '/videos.json?callback=?', {format: "json"}, function(videos) {
        for (var j = 0; j < videos.length; j++) {
        var ul = document.getElementById('liste_video');
    
        var li = document.createElement('li');
        li.setAttribute('class', 'small '+locs[i][4]);
        ul.appendChild(li);
    
        var a = document.createElement('a');
        a.setAttribute('href', '');
        li.appendChild(a);
    
        var img = document.createElement('img');
        img.setAttribute('src', videos[j].thumbnail_large);
        img.setAttribute('alt', videos[j].title);
        a.appendChild(img);
    
        var div = document.createElement('div');
        div.setAttribute('class', 'video');
        div.innerHTML = videos[j].title;
        a.appendChild(div);

        //Reecriture des url des vidéos liées
        $("#liste_video li:nth("+j+") a").attr("href", "video.html?id="+videos[j].id);//regénération des url avec les id vimeo
        $("#liste_video li:nth("+j+") a img").attr("alt", videos[j].title);//alt

        };
    });

    //Options cercles
    var videoOptions = {
        strokeColor: "#156ddb",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#156ddb",
        fillOpacity: 0.35,
        map: map,
        center: new google.maps.LatLng(locs[i][0], locs[i][1]),
        radius: 150000*locs[i][5]
    };
    cityCircle = new google.maps.Circle(videoOptions);

    //var infowindow = new google.maps.InfoWindow({content: locs[i][3]});
    google.maps.event.addListener(marker, 'click', function() {
        document.getElementById('title_marker').innerHTML = ' > ' + locs[i][2]; // Ajout du nom du lieu
        map.panTo(marker.getPosition());
        for (var j = 0; j < locs.length; j++) {
            $('.small').hide(); // cache les video active
        }
            $('.'+locs[i][4]).slideToggle(); // affiche les video du marker
        });
} // Fin createMarker

// Cache les videos de la map
$('.small').hide();

});