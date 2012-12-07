$(document).ready( function() {
    var id_i = getID();
    var cpt = 0;
    $.each(donnees.item, function() {
        if(this.id==id_i&&this.featured=="no"){
            $("#title-single").append(this.titre+" - "+this.soustitre);
            $("#content").append('<img src="'+this.image+'" alt="'+this.titre+'" />');
            $("#content").append('<p>'+this.description+'</p>');
        }
        cpt++;
    });
});