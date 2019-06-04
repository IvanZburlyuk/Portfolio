
jQuery(document).ready(function() {

	// Menu script start
	$(window).on("resize", function() {
		if ($(window).width() < 771) {
			$('.mobile-menu').show();
			$('.main_menu').hide();
			
			
		} else {
			$('.main_menu').show();
			$('.mobile-menu').hide();

		}
	})
	// Menu script end


	
})
