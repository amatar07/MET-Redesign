$( document ).ready(function() {

	//adding highlight to menu selection
	$('nav a, .nav2 a').on('click', function() {
		$(this).addClass('active');
		$(this).parents('li').siblings().children('a').removeClass('active');
	});

	$( ".academics" ).click(function() {
		$(".academicsSUB").toggle();
	});

	$( ".extra" ).click(function() {
		$(".extraSUB").toggle();
	});

	$( ".agenda" ).click(function() {
		$(".agendaSUB").toggle();
	});

	$( ".about" ).click(function() {
		$(".aboutSUB").toggle();
	});

});
