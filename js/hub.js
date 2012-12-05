//Traitement des donnees JSON
    
    //featured
    for(i=0;i<7;i++){
	    $("#ul_feat li:nth("+i+") a").attr("href", donnees.featured.item[i].type+".html?id="+donnees.featured.item[i].id);//url
	    $("#ul_feat li:nth("+i+") a img").attr("src", donnees.featured.item[i].image);//img
        $("#ul_feat li:nth("+i+") a img").attr("alt", donnees.featured.item[i].titre);//alt
	    $("#ul_feat li:nth("+i+") a div").addClass(donnees.featured.item[i].type);//type
	    $("#ul_feat li:nth("+i+") a div").empty();//On vide titre+sous titre
	    $("#ul_feat li:nth("+i+") a div").append(donnees.featured.item[i].titre+"<p>"+donnees.featured.item[i].soustitre+"</p>");//titre+sous titre
	}
	
	//videos
    for(i=0;i<7;i++){
	    $("#ul_videos li:nth("+i+") a div").addClass("video");//type
	   }
	
	//athletes
	for(i=0;i<7;i++){
	    $("#ul_athletes li:nth("+i+") a").attr("href", donnees.athletes.item[i].type+".html?id="+donnees.athletes.item[i].id);//url
	    $("#ul_athletes li:nth("+i+") a img").attr("src", donnees.athletes.item[i].image);//img
        $("#ul_athletes li:nth("+i+") a img").attr("alt", donnees.athletes.item[i].titre);//alt
	    $("#ul_athletes li:nth("+i+") a div").addClass(donnees.athletes.item[i].type);//type
	    $("#ul_athletes li:nth("+i+") a div").empty();//On vide titre+sous titre
	    $("#ul_athletes li:nth("+i+") a div").append(donnees.athletes.item[i].titre+"<p>"+donnees.athletes.item[i].soustitre+"</p>");//titre+sous titre
	}
	
	//events
	for(i=0;i<7;i++){
	    $("#ul_events li:nth("+i+") a").attr("href", donnees.events.item[i].type+".html?id="+donnees.events.item[i].id);//url
	    $("#ul_events li:nth("+i+") a img").attr("src", donnees.events.item[i].image);//img
        $("#ul_events li:nth("+i+") a img").attr("alt", donnees.events.item[i].titre);//alt
	    $("#ul_events li:nth("+i+") a div").addClass(donnees.events.item[i].type);//type
	    $("#ul_events li:nth("+i+") a div").empty();//On vide titre+sous titre
	    $("#ul_events li:nth("+i+") a div").append(donnees.events.item[i].titre+"<p>"+donnees.events.item[i].soustitre+"</p>");//titre+sous titre
	}
	
	//places
	for(i=0;i<7;i++){
	    $("#ul_places li:nth("+i+") a").attr("href", donnees.places.item[i].type+".html?id="+donnees.places.item[i].id);//url
	    $("#ul_places li:nth("+i+") a img").attr("src", donnees.places.item[i].image);//img
        $("#ul_places li:nth("+i+") a img").attr("alt", donnees.places.item[i].titre);//alt
	    $("#ul_places li:nth("+i+") a div").addClass(donnees.places.item[i].type);//type
	    $("#ul_places li:nth("+i+") a div").empty();//On vide titre+sous titre
	    $("#ul_places li:nth("+i+") a div").append(donnees.places.item[i].titre+"<p>"+donnees.places.item[i].soustitre+"</p>");//titre+sous titre
	}