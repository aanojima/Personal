$(document).ready(function() {
	// when scroll

	$(window).scroll(function(){
		
		//if scrolled down more than the header's height
		if ($(window).scrollTop() >= 800){
			
			// if yes, add "fixed" class to the <nav>
			// add padding top to the #content (value is same as the height of the nav)
			$('nav').addClass('fixed').css('top','0').next().css('padding-top','60px');
		} else {
			
			// when scroll up or less than aboveHeight, remove the "fixed" class, and the padding-top
			$('nav').removeClass('fixed').next().css('padding-top','0');
		}
	});

	$("a").click(function(){
		$('nav').addClass('fixed').css('top','0').next().css('padding-top','60px');
	});
});