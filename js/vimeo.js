
function getID(){
        var regexS = "[\\?&]id=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.search);
        if(results == null){
            return "";
        }
        else{
        return decodeURIComponent(results[1].replace(/\+/g, " "));
        }
    }

var id_video = getID();
var apiEndpoint = 'http://vimeo.com/api/v2/';
var oEmbedEndpoint = 'http://vimeo.com/api/oembed.json'
var oEmbedCallback = 'switchVideo';
var videosCallback = 'setupGallery';
var vimeoUsername = 'brad';

$(document).ready(function() {
            $.getScript(apiEndpoint + vimeoUsername + '/videos.json?callback=' + videosCallback);
        });

        function getVideo(url) {
            $.getScript(oEmbedEndpoint + '?url=http://vimeo.com/' + id_video + '&width=504&height=280&callback=' + oEmbedCallback);
        }

        function setupGallery(videos) {
            // Load the first video
            getVideo(videos[0].url);
        }

        function switchVideo(video) {
            $('#embed').html(unescape(video.html));
        }

