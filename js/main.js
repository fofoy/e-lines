$(function(){

	// Bind scrollable content
	$('#scrollbar1').tinyscrollbar({ axis: 'x'});

	// Bind tooltips
	$('nav ul li a').tipsy({gravity:'s'});
});