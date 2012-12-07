//Generation des donnees des pages single depuis le JSON
$(document).ready( function() {
    var id_i = getID();
    var cpt = 0;
    $.each(donnees.item, function() {
        if(this.id==id_i&&this.featured=="no"){
            $("#title-single").append("<a href='#'>"+this.titre+" - "+this.soustitre+"</a>");
            $("#content").append('<img src="'+this.image+'" alt="'+this.titre+'" />');
            $("#content").append('<p id="description">'+this.description+'</p>');
        }
        cpt++;
    });
});