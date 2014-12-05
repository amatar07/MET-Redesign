$( document ).ready(function() {

	// Adding highlight to menu selection
	$("nav a").on('click', function() {
		$(this).addClass('active');
		$(this).parents('li').siblings().children('a').removeClass('active');
	});

	// Adding highlight to menu selection
	$(".subnavigation a").on('click', function() {
		$(this).removeClass('active');
	});

	// Adding highlight to menu selection
	// $(".nav2 a").on('click', function() {
	// 	$(this).addClass('active');
	// 	$(this).parents('li').siblings().children('a').removeClass('active');
	// });

	// Toggle Script
	$(".toggle-button").click(function() {
		toggleViews($(this));
		$(".toggle-button").removeClass("active");
		$(this).addClass("active");
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


function toggleViews(toggle_button) {
	var target = toggle_button.data("target");
	var toggleclass = toggle_button.data("class");
	$("." + toggleclass).addClass("hidden");
	$("." + target).removeClass("hidden");
}