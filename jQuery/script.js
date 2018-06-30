jQuery(document).ready(function(){
	
	var windowHeight, windowScrollPosTop, windowScrollPosBottom = 0;

	// calculate window position and scroll tracking variables
	function calcScrollValues() {
		windowHeight = jQuery(window).height();
		windowScrollPosTop = jQuery(window).scrollTop();
		windowScrollPosBottom = windowHeight + windowScrollPosTop;
	} // end calcScrollValues
	
	jQuery.fn.revealOnScroll = function(direction, speed){
		
		return this.each(function(){
			
			var objectOffset = jQuery(this).offset();
			var objectOffsetTop = objectOffset.top;		
		
			if(!jQuery(this).hasClass("hidden")){
			
			if(direction == "right"){
				jQuery(this).css({
					"opacity":0,
					"right": "700px",
					"position"	: "relative"
					
				});
			} else {
				jQuery(this).css({
					"opacity": 0,
					"right": "-700px",
					"position"	: "relative"
				});
			}
			jQuery(this).addClass("hidden");
		}
		
		
		
		if(!jQuery(this).hasClass("animation-complete")){
			if(windowScrollPosBottom > objectOffsetTop){
			
			jQuery(this).animate({"opacity" : 1, "right" : 0}, speed).addClass("animation-complete");
		}
		}
			
		});
	}
	
	
	// reveal commands
	function revealCommands() {
		jQuery("img:nth-of-type(1)").revealOnScroll("right", 800);
		jQuery("img:nth-of-type(2)").revealOnScroll("left", 400);
		jQuery("img:nth-of-type(3)").revealOnScroll("right", 1200);
		jQuery("ul li:even").revealOnScroll("left", 800);
		jQuery("ul li:odd").revealOnScroll("right", 800);
		jQuery(".sidebar").revealOnScroll("left", 1500);
	} // end reveal commands
	
	// run the following on initial page load
	calcScrollValues();
	revealCommands();
	
	// run the following on every scroll event
	jQuery(window).scroll(function() {
		calcScrollValues()
		revealCommands();
	});
	
	

});