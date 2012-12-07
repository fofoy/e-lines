//Generation des donnees des pages single depuis le JSON
$(document).ready( function() {
    var id_i = getID();
    $.each(donnees.item, function() {
        if(this.id==id_i&&this.featured=="no"){
            $("#title-single").append(this.titre+" - "+this.soustitre);
            $("#biopic img").attr("src", this.image);
            $("#biopic img").attr("alt", this.titre);
            if(this.type=="athlete"){
                $("#description").append('<h3>BIOGRAPHY</h3>');
            }else{
                $("#description").append('<h3>ABOUT</h3>');
            }
            $("#description").append('<p>'+this.description+'</p><p>'+this.description+'</p>');
        }
    });
});