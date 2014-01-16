$(document).ready(function(){
	
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

	$('*').bind('mousemove keydown scroll', function () {
		clearTimeout(idleTimer);
		if (idleState == true && $(window).scrollTop() < 800) {
			// Reactivated event
			$("#scroll_item").fadeOut(400);
		}
		idleState = false;
		idleTimer = setTimeout(function () {
			// Idle Event
			idleState = true;
			$("#scroll_item").fadeIn(400);
		}, idleWait);
	});

});