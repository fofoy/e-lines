
// Change this to your username to load in your clips
var vimeoAlbum = '2172628'; // id de l'album Mountain

// Tell Vimeo what function to call
var videoCallback = 'latestVideo';

// Set up the URLs
var videosUrl = 'http://vimeo.com/api/v2/album/' + vimeoAlbum + '/videos.json?callback=' + videoCallback;

// This function uses oEmbed to get the last clip
function latestVideo(videos) {
    for (var i = 0; i < 7; i++) {
      //generation des vidéos dans "videos"
      document.getElementById('title_video_small'+(i)).innerHTML = videos[i].title;
      document.getElementById('link_video_small'+(i)).setAttribute('id', videos[i].id);
      document.getElementById('thumb_video_small'+(i)).setAttribute('src', videos[i].thumbnail_large);
      $("#main div.category:nth(1) ul li:nth("+i+") a").attr("href", "video.html?id="+videos[i].id);//regénération des url avec les id vimeo
      $("#main div.category:nth(1) ul li:nth("+i+") a img").attr("alt", videos[i].title);//alt

      //generation des vidéos dans "featured"
      if(i==1||i==5){
      document.getElementById('title_video_small_f'+(i)).innerHTML = videos[i].title;
      document.getElementById('link_video_small_f'+(i)).setAttribute('id', videos[i].id);
      document.getElementById('thumb_video_small_f'+(i)).setAttribute('src', videos[i].thumbnail_large);
      $("#main div.category:nth(0) ul li:nth("+i+") a").attr("href", "video.html?id="+videos[i].id);//regénération des url avec les id vimeo
      $("#main div.category:nth(0) ul li:nth("+i+") a img").attr("alt", videos[i].title);//alt
      }

      //Mise à jour dynamique du JSON pour la fonction de recherche
      donnees.item[7+i].id=videos[i].id; 
      donnees.item[7+i].titre=videos[i].title;
    };
}

// This function loads the data from Vimeo
function loadScript(url) {
    var js = document.createElement('script');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', url);
    document.getElementsByTagName('head').item(0).appendChild(js);
}



$(function(){
	loadScript(videosUrl);
});