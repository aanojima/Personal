$(document).ready(function(){

	// $("#scroll_item").hide();
	var idleState = false;
	var idleWait = 2000;
	var idleTimer = null;

	$(".edu-icon, .work-icon").click(function(){
		$("#hidden").fadeIn(500,function(){
			$(".main_content,#home,nav").one("click", function(){
				$("#hidden").fadeOut(500);
			});
		});
	});

	$("#social_network li a").hover(function(){
		$(this).effect('bounce');
	}, function(){});

	$('*').bind('load mousemove keydown scroll', function () {
		clearTimeout(idleTimer);
		idleState = false;
		if (idleState == false && $(window).scrollTop() < 800) {
			// Reactivated event
			$("#scroll_item").hide("fade", 400);
		}
		idleTimer = setTimeout(function () {
			// Idle Event
			idleState = true;
			$("#scroll_item").show("fade", 400);
		}, idleWait);
	});

});