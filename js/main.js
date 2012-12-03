$(function(){

	// Bind scrollable content
	$('#scrollbar1').tinyscrollbar({ axis: 'x'}); // scrollbar HUB

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
    
	// Bind tooltips
	$('nav ul li a').tipsy({gravity:'s'});

	// Bind search area
	$('#search').bind('click', function(){
		$(this).toggleClass('active');
		$("#search_area").toggleClass('visible');
	});
	
});