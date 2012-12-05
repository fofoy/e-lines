$(document).ready( function() {
//Traitement des donnees JSON

for(j=0;j<5;j++){
	for(i=0;i<7;i++){
	    $("#main div.category:nth("+j+") ul li:nth("+i+") a").attr("href", donnees.item[i+j*7].type+".html?id="+donnees.item[i+j*7].id);//url
	    $("#main div.category:nth("+j+") ul li:nth("+i+") a img").attr("src", donnees.item[i+j*7].image);//img
	    $("#main div.category:nth("+j+") ul li:nth("+i+") a img").attr("alt", donnees.item[i+j*7].titre);//alt
	    $("#main div.category:nth("+j+") ul li:nth("+i+") a div").addClass(donnees.item[i+j*7].type);//type
	    $("#main div.category:nth("+j+") ul li:nth("+i+") a div").empty();//On vide titre+sous titre
	    $("#main div.category:nth("+j+") ul li:nth("+i+") a div").append(donnees.item[i+j*7].titre+"<p>"+donnees.item[i+j*7].soustitre+"</p>");//titre+sous titre
	}
}

});