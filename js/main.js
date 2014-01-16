$(document).ready(function(){
	$(".edu-icon, .work-icon").click(function(){
		$("#hidden").fadeIn(500,function(){
			$(".main_content,#home,nav").one("click", function(){
				$("#hidden").fadeOut(500);
			});
		});
	});
	$("#social_network li a").hover(function(){
		$(this).effect('bounce');
	}, function(){
		console.log("BYE");
	});
});