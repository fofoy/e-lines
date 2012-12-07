$(document).ready(function() {
    var vimeoUsername;
    var id_video = getID();
    var url_video = 'http://vimeo.com/' + id_video;
    $.getJSON('http://vimeo.com/api/v2/video/' + id_video + '.json?callback=?', {format: "json"}, function(videos) {
        vimeoUsername = videos[0].user_id;
        $('#title_video_big').html(videos[0].title);
    });
    getVideo(url_video);
    $.getScript('http://vimeo.com/api/v2/' + vimeoUsername + '/videos.json?callback=setupGallery');
});

function getVideo(url) {
    $.getScript('http://vimeo.com/api/oembed.json?url=http://vimeo.com/' + url + '&autoplay=1&portrait=0&title=0&byline=0&callback=switchVideo');
}

function setupGallery(videos) {

    // Add the videos to the gallery
    for (var j = 0; j < 4; j++) {
        var ul = document.getElementById('liste_video');

        var li = document.createElement('li');
        li.setAttribute('class', 'small');
        ul.appendChild(li);
    
        var a = document.createElement('a');
        a.setAttribute('href', 'video.html?id='+videos[j].id);
        li.appendChild(a);
    
        var img = document.createElement('img');
        img.setAttribute('src', videos[j].thumbnail_large);
        img.setAttribute('alt', videos[j].title);
        a.appendChild(img);
    
        var div = document.createElement('div');
        div.setAttribute('class', 'video');
        div.innerHTML = videos[j].title;
        a.appendChild(div);
    }

    // Switch to the video when a thumbnail is clicked
    $('#liste_video li a').click(function(event) {
        event.preventDefault();
        url = this.href.split('?id=')[this.href.split('?id=').length - 1];
        getVideo(url);

        $.getJSON('http://vimeo.com/api/v2/video/' + url + '.json?callback=?', {format: "json"}, function(videos) {
            $('#title_video_big').html(videos[0].title);
            $('meta[property=og\\:title]').attr('content', videos[0].title + ' on e-Lines');
            $('meta[property=og\\:url]').attr('content', '');
            $('meta[property=og\\:image]').attr('content', '');
            refresh_infos(videos);
        });
        return false;
    });

}

function switchVideo(video) {
    $('#embed').html(unescape(video.html));
}

// Raffraichissement des meta
function refresh_infos(videos) {
    $('#title_video_big').html(videos[0].title);
    $('meta[property=og\\:title]').attr('content', videos[0].title + ' on e-Lines');
    $('meta[property=og\\:url]').attr('content', 'htpp://e-lines.com');
    $('meta[property=og\\:image]').attr('content', videos[0].thumbnail_small);
}

//Detection de fin de chargement des videos et on recalcule le responsive
document.getElementById('liste_video').api_addEventListener('finish', function(event) {
    responsive();
});