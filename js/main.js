$(document).ready(function(){

	var idleState = false;
	var idleWait = 2000;
	var idleTimer = null;

	$("#hidden").dialog({
		autoOpen : false,
		resizable : false,
		draggable : false,
		modal : true,
		position : {
			my : "top",
			at : "top",
			of : window
		},
		dialogClass : "fixed_dialog",
		minHeight : 500,
		minWidth : 800,
		open : function(){
			console.log("NEW");
			$('body').on({
				mousewheel : function(e){
					if (e.target.id == 'el') return;
					e.preventDefault();
					e.stopPropagation();
				},
			});
			$('#home, #navigation_container, #content').one(function(e){
				console.log("SHOULD CLOSE");
			})
		},
		close : function(e){
			$('body').unbind('mousewheel');
		}
	});

	$(".edu-icon, .work-icon").click(function(){
		$("#hidden").dialog('open');
	});

	$("#social_network li a").hover(function(){
		$(this).effect('bounce');
	}, function(){});

	// $("body").bind("mousewheel",function(ev, delta) {
	// 	var scrollTop = $(window).scrollTop();
	// 	$(window).scrollTop(scrollTop - Math.round(delta*20));
	// });

	// Idle Scroll
	$('*').on('load mousemove keydown scroll', function () {
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