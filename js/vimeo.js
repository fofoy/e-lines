
// Change this to your username to load in your clips
var vimeoUserName = 'chamonix';

// Tell Vimeo what function to call
var videoCallback = 'latestVideo';
var oEmbedCallback = 'embedVideo';

// Set up the URLs
var videosUrl = 'http://vimeo.com/api/v2/' + vimeoUserName + '/videos.json?callback=' + videoCallback;
var oEmbedUrl = 'http://vimeo.com/api/oembed.json';

// This function puts the video on the page
function embedVideo(video) {
    videoEmbedCode = video.html;
    document.getElementById('embed').innerHTML = unescape(video.html);
}

// This function uses oEmbed to get the last clip
function latestVideo(videos) {
    var videoUrl = videos[0].url;

    // Get the oEmbed stuff
    loadScript(oEmbedUrl + '?url=' + encodeURIComponent(videoUrl) + '&callback=' + oEmbedCallback);
}

// This function loads the data from Vimeo
function loadScript(url) {
    var js = document.createElement('script');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', url);
    document.getElementsByTagName('head').item(0).appendChild(js);
}

// Call our init function when the page loads
window.onload = function() {
    loadScript(videosUrl);
};
