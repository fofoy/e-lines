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

//Search
    // détection de la saisie dans le champ de recherche
    $('#q').keyup( function(){
    	$("#res_search").empty();//On nettoye la liste avant d'écrire des résultats
        $field = $(this);
 		
        // on commence à traiter à partir du 2ème caractère saisi
        if( $field.val().length > 1 )
        {
            $.each(donnees.item, function() {
				if(this.titre.toLowerCase().indexOf($field.val().toLowerCase())!=-1||this.soustitre.toLowerCase().indexOf($field.val().toLowerCase())!=-1){
					if($("#s_"+this.type).addClass('selected')){
						$("#res_search").append("<li><span class='"+this.type+"'></span>"+this.titre+"</li>")
					}
				}
			});
        }       
    });

    


});