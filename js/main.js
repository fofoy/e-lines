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
    
    //Traitement des donnees JSON
    
    //featured
    for(i=0;i<7;i++){
	    $("#ul_feat li:nth("+i+") a").attr("href", donnees.featured.item[i].type+".html?id="+donnees.featured.item[i].id);//url
	    $("#ul_feat li:nth("+i+") a img").attr("src", donnees.featured.item[i].image);//img
	    $("#ul_feat li:nth("+i+") a div").addClass(donnees.featured.item[i].type);//type
	    $("#ul_feat li:nth("+i+") a div").empty();//On vide titre+sous titre
	    $("#ul_feat li:nth("+i+") a div").append(donnees.featured.item[i].titre+"<p>"+donnees.featured.item[i].soustitre+"</p>");//titre+sous titre
	}
	
	//videos
    for(i=0;i<7;i++){
	    $("#ul_videos li:nth("+i+") a").attr("href", donnees.videos.item[i].type+".html?id="+donnees.videos.item[i].id);//url
	    $("#ul_videos li:nth("+i+") a img").attr("src", donnees.videos.item[i].image);//img
	    $("#ul_videos li:nth("+i+") a div").addClass(donnees.videos.item[i].type);//type
	    //$("#ul_videos li:nth("+i+") a div").empty();//On vide titre+sous titre
	    //$("#ul_videos li:nth("+i+") a div").append(donnees.videos.item[i].titre+"<p>"+donnees.videos.item[i].titre+"</p>");//titre+sous titre
	}
	
	//athletes
	for(i=0;i<7;i++){
	    $("#ul_athletes li:nth("+i+") a").attr("href", donnees.athletes.item[i].type+".html?id="+donnees.athletes.item[i].id);//url
	    $("#ul_athletes li:nth("+i+") a img").attr("src", donnees.athletes.item[i].image);//img
	    $("#ul_athletes li:nth("+i+") a div").addClass(donnees.athletes.item[i].type);//type
	    //$("#ul_athletes li:nth("+i+") a div").empty();//On vide titre+sous titre
	    //$("#ul_athletes li:nth("+i+") a div").append(donnees.athletes.item[i].titre+"<p>"+donnees.athletes.item[i].titre+"</p>");//titre+sous titre
	}

});