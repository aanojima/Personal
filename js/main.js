$(document).ready(function(){
	// $("#logo").click(function(){
	// 	$(".main_content").css({"display": "none", "visibility" : "hidden"});
	// 	$("#index").css({"display" : "block", "visibility" : "visible"});
	// 	$(".navlink").css({"text-decoration" : "none"});
	// 	$("#logo").css({"text-decoration" : "underline"});
	// });
	// $("#nav-about-me").click(function(){
	// 	$(".main_content").css({"display": "none", "visibility" : "hidden"});
	// 	$("#about-me").css({"display" : "block", "visibility" : "visible"});
	// 	$(".navlink").css({"text-decoration" : "none"});
	// 	$("#nav-about-me").css({"text-decoration" : "underline"});
	// });
	// $("#nav-work-experience").click(function(){
	// 	$(".main_content").css({"display": "none", "visibility" : "hidden"});
	// 	$("#work-experience").css({"display" : "block", "visibility" : "visible"});
	// 	$(".navlink").css({"text-decoration" : "none"});
	// 	$("#nav-work-experience").css({"text-decoration" : "underline"});	
	// });
	// $("#nav-education").click(function(){
	// 	$(".main_content").css({"display": "none", "visibility" : "hidden"});
	// 	$("#education").css({"display" : "block", "visibility" : "visible"});
	// 	$(".navlink").css({"text-decoration" : "none"});
	// 	$("#nav-education").css({"text-decoration" : "underline"});
	// });
	// $("#nav-projects").click(function(){
	// 	$(".main_content").css({"display": "none", "visibility" : "hidden"});
	// 	$("#projects").css({"display" : "block", "visibility" : "visible"});
	// 	$(".navlink").css({"text-decoration" : "none"});
	// 	$("#nav-projects").css({"text-decoration" : "underline"});
	// });
	$("#nav-resume").click(function(){
		window.location.href="resume.pdf";
	})
	$(".edu-icon, .work-icon").click(function(){
		$("#hidden").fadeIn(500,function(){
			$(".main_content,#home,nav").one("click", function(){
				$("#hidden").fadeOut(500);
			});
		});
	})
});