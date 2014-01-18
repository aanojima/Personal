$(document).ready(function() {
	// when scroll

	$(window).scroll(function(){
		console.log("SCROLL");
		//if scrolled down more than the header's height
		if ($(window).scrollTop() >= $("#home").height()){
			
			// if yes, add "fixed" class to the <nav>
			// add padding top to the #content (value is same as the height of the nav)
			$('#navigation-container').addClass('fixed').css('top','0');
			$('#content').css({'padding-top' : '60px'});

		} else {
			
			// when scroll up or less than aboveHeight, remove the "fixed" class, and the padding-top
			$('#navigation-container').removeClass('fixed');
			$('#content').css({'padding-top' : '0px'});

		}
	});

	$("a").click(function(){
		$('html, body').animate({
			scrollTop: $(window).scrollTop() >= $("#home").height() ? 
				$( $.attr(this, 'href') ).offset().top : 
				$( $.attr(this, 'href') ).offset().top,
		}, 500);
		return false;
	});

	$("#navigation-container a").hover(function(){
		$(this).animate({
			color : "red"
		}, 100)
	}, function(){
		$(this).animate({
			color : "white"
		}, 100)
	});

	$("#nav-resume").click(function(){
		window.location.href="resume.pdf";
	})
});