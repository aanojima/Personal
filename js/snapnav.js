$(document).ready(function() {
	
	var Keys = {
		RIGHT : 37,
		UP : 38,
		LEFT : 39,
		DOWN : 40,
	}

	var scrollTop;
	var fullHeight;

	// when scroll
	$(window).scroll(function(){

		//if scrolled down more than the header's height
		if ($(window).scrollTop() >= $("#home").height()){
			
			// if yes, add "fixed" class to the <nav>
			// add padding top to the #content (value is same as the height of the nav)
			$('#navigation-container').css({'position' : 'fixed'});
			$('#content').css({'padding-top' : '60px'});

		} else {
			
			// when scroll up or less than aboveHeight, remove the "fixed" class, and the padding-top
			$('#navigation-container').css({'position' : 'relative'});
			$('#content').css({'padding-top' : '0px'});

		}

		scrollTop = $(window).scrollTop();
	});

	function goToContent(ID){
		$('html, body').animate({
			scrollTop: $(ID).offset().top
		}, 500);
		return false;
	}

	$("a").click(function(){
		var ID = $.attr( this, 'href' );
		return goToContent(ID);
	});

	$("*").keydown(function(e){
		var sectionIndex = 1 + Math.floor( ($(window).scrollTop() - $("#home").height() ) / ($(".main_content").height() + 60));
		sectionIndex < 1 ? sectionIndex = 0 : null;
		var divs = $("#home, .main_content").toArray();
		var key = (e.keyCode ? e.keyCode : e.which);
		if (key == Keys.UP || key == Keys.RIGHT) {
			var prevIndex = sectionIndex - 1;
			var prevDiv;
			if (prevIndex >= 0){
				prevDiv = divs[prevIndex];
			} else { return false }
			return goToContent("#" + prevDiv.id);
		} else if (key == Keys.DOWN || key == Keys.LEFT) {
			var nextIndex = sectionIndex + 1;
			var nextDiv;
			if (nextIndex < divs.length){
				nextDiv = divs[nextIndex];
			} else { return false }
			return goToContent("#" + nextDiv.id);
		}
	})

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