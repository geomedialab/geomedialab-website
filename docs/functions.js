$(document).ready(function(){


	//dropdown function for bios
	$(".collapsables").click(function () {

		$collapsable = $(this);
		//getting the next element
		$nextBox = $collapsable.next();
		//hide all other texts
		$(".bioTextFrame").not($nextBox).hide("medium");
		//$(".collapsables").not($collapsables).fadeTo( "slow", 0.1, function() {});
		
		if($(this).css('opacity') == 0.95) {
			$($collapsable).fadeTo(400, 1);
			$(".collapsables").not($collapsable).fadeTo(400, 0.4);
		}
		else if ($(this).css('opacity') == 0.4) {
			$($collapsable).fadeTo(400, 1);
			$(".collapsables").not($collapsable).fadeTo(400, 0.4);
		}
		else {
			$(".collapsables").fadeTo(400, 0.95);
		}
		
		//toggle current text
		$nextBox.slideToggle("medium");
	
	});
	

	// on scroll navbar's bottom gains black line
	$(window).scroll(function(){                         
		if ($(this).scrollTop() > 20) {
			$('.navbar').css("border-bottom-color", "#00000");
		}
		else
		$('.navbar').css("border-bottom-color", "#fffff");
	});


	/* on mouseOver, navbar fades in
	$(".navbar").hover(function(){
    	$("#myNavbar").fadeTo("fast",1);
	}, function() {
    	$("#myNavbar").fadeTo("fast",0.5);
	});
	*/
	
	//on mouseover, darken image
	$(".hoverItem").hover(function(){
    	$(this).fadeTo("fast",0.9);
	}, function() {
    	$(this).fadeTo("fast",1);
	});

})(jQuery);






	
