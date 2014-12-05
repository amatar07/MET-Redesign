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

	// Toggle Script
	$(".toggle-button").click(function() {
		toggleViews($(this));
		$(".toggle-button").removeClass("active");
		$(this).addClass("active");
	});

	$('img').on('dragstart', function(event) {
		event.preventDefault();
	});

	$( ".academics" ).click(function() {
		$(".academicsSUB").toggleClass("hidden");
		$(".academicsRight").toggle();
		$(".academicsDown").toggleClass("hidden");
	});

	$( ".extra" ).click(function() {
		$(".extraSUB").toggleClass("hidden");
		$(".extraRight").toggle();
		$(".extraDown").toggleClass("hidden");
	});

	$( ".agenda" ).click(function() {
		$(".agendaSUB").toggleClass("hidden");
		$(".agendaRight").toggle();
		$(".agendaDown").toggleClass("hidden");
	});

	$( ".about" ).click(function() {
		$(".aboutSUB").toggleClass("hidden");
		$(".aboutRight").toggle();
		$(".aboutDown").toggleClass("hidden");
	});

});


function toggleViews(toggle_button) {
	var target = toggle_button.data("target");
	var toggleclass = toggle_button.data("class");
	$("." + toggleclass).addClass("hidden");
	$("." + target).removeClass("hidden");
}