$(document).ready(function() {
	// when scroll

	$(window).scroll(function(){
		
		//if scrolled down more than the header's height
		if ($(window).scrollTop() >= 800){
			
			// if yes, add "fixed" class to the <nav>
			// add padding top to the #content (value is same as the height of the nav)
			$('#navigation-container').addClass('fixed').css('top','0');
			$('.center-div').css({'padding-top' : '60px'});

		} else {
			
			// when scroll up or less than aboveHeight, remove the "fixed" class, and the padding-top
			$('#navigation-container').removeClass('fixed');
			$('.center-div').css({'padding-top' : '0px'});

		}
	});

	$("a").click(function(){
		$('html, body').animate({
			scrollTop: $(window).scrollTop() >= 800 ? $( $.attr(this, 'href') ).offset().top : $( $.attr(this, 'href') ).offset().top - 100,
		}, 500);
		return false;
	});

	$("#nav-resume").click(function(){
		window.location.href="resume.pdf";
	})
});