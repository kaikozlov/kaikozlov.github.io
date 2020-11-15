$( "pre" ).hover(function(){
	$( this ).css("animation", "rainbow 10s infinite");
	$( "div" ).css("animation", "rainbow 10s infinite");	
	$( "p" ).css("animation", "rainbow 10s infinite");
	
	$( "select" ).css("animation", "rainbow 10s infinite");
	$( "a" ).css("animation", "rainbow 10s infinite");
	$( "option" ).css("animation", "rainbow 10s infinite");
	$( "input" ).css("animation", "rainbow 10s infinite");

	
	}, function(){
	$( this ).css("animation", "none");
	$( "div" ).css("animation", "none");
	$( "p" ).css("animation", "none");
	$( "input" ).css("animation", "none");
	$( "select" ).css("animation", "none");
	$( "a" ).css("animation", "none");
	$( "option" ).css("animation", "none");
	


});