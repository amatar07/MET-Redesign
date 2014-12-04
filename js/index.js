$( document ).ready(function() {

	//adding highlight to menu selection
	$("nav a").on('click', function() {
		$(this).addClass('active');  $(this).parents('li').siblings().children('a').removeClass('active');
	});

	//adding highlight to menu selection
	$(".subnavigation a").on('click', function() {
		$(this).removeClass('active');
	});

		//adding highlight to menu selection
	$(".nav2 a").on('click', function() {
		$(this).addClass('active');  $(this).parents('li').siblings().children('a').removeClass('active');
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
