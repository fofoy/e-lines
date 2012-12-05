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
        var blockSmallHeight = (content - marginBlocks*12)/4;
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
            $('.big_video').height(content - marginBlocks*2);
            $('.big_video').width($('.big_video').height() * 16/9 ); /* Temp */
            $('.video_content .small').height((content - marginBlocks*17)/4); /* Temp */
            $('.overview').width($('.big_video').width() + blockSmallWidth + marginContent); /* Temp */
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

});