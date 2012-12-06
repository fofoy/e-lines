$(function(){
    
	// Bind tooltips
	$('nav ul li a').tipsy({gravity:'s'});

	// Bind search area
	$('#search').bind('click', function(){
		$(this).toggleClass('active');
		$("#search_area").toggleClass('visible');
	});

    $('#search_area ul li').click(function(){
        $(this).toggleClass('selected');
    });

    //Reponsive
    responsive();
    $(window).resize(responsive);

    function responsive (argument) {
        var ratio = 16/9;
        var scrollbar = 20;
        var windowHeight = $(window).height();
        var headerHeight = $('header').height();
        var marginContent = 40;
        var marginBlocks = 5;
        var h2Height = $('h2').height();
        var viewport = (windowHeight - headerHeight - marginContent*2);
        var content = viewport - h2Height;
        var blockSmallHeight = (content - marginBlocks*6)/4;
        var blockMidHeight = (blockSmallHeight*2 + marginBlocks*2);
        var blockBigHeight = (blockMidHeight);
        var blockBigWidth = Math.floor(blockBigHeight*ratio);
        var blockSmallWidth = ((blockBigWidth - marginBlocks*2)/2);
        var blockMidWidth = ((blockBigWidth - marginBlocks*2)/2);
        var category = (blockBigWidth + blockMidWidth + marginBlocks*4)
        var overview = category * $('.category').length;
        $('.viewport').height(viewport);
        $('.small').height(blockSmallHeight);
        $('.mid').height(blockMidHeight);
        $('.big').height(blockBigHeight);
        $('.small').width(blockSmallWidth);
        $('.mid').width(blockMidWidth);
        $('.big').width(blockBigWidth);
        $('.category').width(category);
        $('.overview').width(overview);
        if ($('.big_video').length > 0){
            var videoWidth = content * ratio;
            $('.big_video').height(content);
            $('.big_video #embed iframe').height(content);
            $('.big_video').width(videoWidth);
            $('.big_video #embed iframe').width(videoWidth);
            $('.overview').width(videoWidth + blockSmallWidth + marginBlocks*4);
        }
        

    }

    //Scrollbar
    
    // Bind scrollable content
    $('#scrollbar1').tinyscrollbar({ axis: 'x', invertscroll: true });

    var scrollbar1 = $('#scrollbar1');
    var wcategory = $(".category").width();
    //add a click event to a button

    $('#scrollbar1-anchor').click(function(){
        scrollbar1.tinyscrollbar_update(0);
        return false;
    });
    $('#scrollbar2-anchor').click(function(){
        scrollbar1.tinyscrollbar_update(wcategory);
        return false;
    });
    $('#scrollbar3-anchor').click(function(){
        scrollbar1.tinyscrollbar_update(wcategory*2);
        return false;
    });
    $('#scrollbar4-anchor').click(function(){
        scrollbar1.tinyscrollbar_update(wcategory*3);
        return false;
    });
    $('#scrollbar5-anchor').click(function(){
        scrollbar1.tinyscrollbar_update(wcategory*4);
        return false;
    });
	
	//Recup query string
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

    //Search
        // détection de la saisie dans le champ de recherche
        $("#search_area form").submit( function(event){
            var hasRes = false;
            $("#res_search").empty();//On nettoye la liste avant d'écrire des résultats
            $field = $("#q");
            $.each(donnees.item, function() {
                if(this.titre.toLowerCase().indexOf($field.val().toLowerCase())!=-1||this.soustitre.toLowerCase().indexOf($field.val().toLowerCase())!=-1){
                    if($("#s_"+this.type).hasClass('selected')){
                        $("#res_search").append("<li><a href='"+this.type+".html?id="+this.id+"'><span class='"+this.type+"'></span>"+this.titre+"</li>");
                        hasRes = true;
                    }
                }
            });
            if(!hasRes){
                $("#res_search").append("<li>No result found.</li>")
            }
            event.preventDefault();
        });

    // ----------------------------------------------------------
    // A short snippet for detecting versions of IE in JavaScript
    // without resorting to user-agent sniffing
    // ----------------------------------------------------------
    // If you're not in IE (or IE version is less than 5) then:
    //     ie === undefined
    // If you're in IE (>=5) then you can determine which version:
    //     ie === 7; // IE7
    // Thus, to detect IE:
    //     if (ie) {}
    // And to detect the version:
    //     ie === 6 // IE6
    //     ie > 7 // IE8, IE9 ...
    //     ie < 9 // Anything less than IE9
    // ----------------------------------------------------------
     
    // UPDATE: Now using Live NodeList idea from @jdalton
     
    var ie = (function(){
     
     var undef,
     v = 3,
     div = document.createElement('div'),
     all = div.getElementsByTagName('i');
     
     while (
     div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
     all[0]
     );
     
     return v > 4 ? v : undef;
     
    }());
    console.log(ie);
    if (ie <= 9) {
        $('#choice ul li a').css({ opacity: 1 });
    }
    if (ie <= 8) {
        $('#choice ul li').eq(1).css("background","url('./css/img/univ_montagne.png')");
        $('#choice ul li').eq(1).hover(function(){$(this).css("background","url('./css/img/univ_montagne_hover.png')")},function(){$(this).css("background","url('./css/img/univ_montagne.png')")});
        $('#choice ul li').eq(2).css("background","url('./css/img/univ_mer.png')");
        $('#choice ul li').eq(2).hover(function(){$(this).css("background","url('./css/img/univ_mer_hover.png')")},function(){$(this).css("background","url('./css/img/univ_mer.png')")});
        $('#choice ul li').eq(3).css("background","url('./css/img/univ_urbain.png')");
        $('#choice ul li').eq(3).hover(function(){$(this).css("background","url('./css/img/univ_urbain_hover.png')")},function(){$(this).css("background","url('./css/img/univ_urbain.png')")});
    }

});