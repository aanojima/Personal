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
		if (idleState) {
			// Reactivated event
			$("#scroll_item").hide("fade", 400);
		}
		idleState = false;
		idleTimer = setTimeout(function () {
			// Idle Event
			idleState = true;
			if ($(window).scrollTop() < 800){
				$("#scroll_item").show("fade", 400);	
			}
		}, idleWait);
	});

});