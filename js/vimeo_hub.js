
// Change this to your username to load in your clips
var vimeoAlbum = '2172628'; // id de l'album Mountain

// Tell Vimeo what function to call
var videoCallback = 'latestVideo';

// Set up the URLs
var videosUrl = 'http://vimeo.com/api/v2/album/' + vimeoAlbum + '/videos.json?callback=' + videoCallback;

// This function uses oEmbed to get the last clip
function latestVideo(videos) {
    for (var i = 0; i < 7; i++) {
      document.getElementById('title_video_small'+(i)).innerHTML = videos[i].title;
      document.getElementById('thumb_video_small'+(i)).setAttribute('src', videos[i].thumbnail_large);
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