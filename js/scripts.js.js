jQuery(document).ready(function() {
	$(window).on("resize", function() {
	var megaMenuContainer = $('.mega-menu-fullwidth-container');
		if ($(window).width() < 771) {	
			$('.mobile-menu').show();
			$('.main_menu').hide();
			$(elem).hide();

		} else {
		$('.mobile-menu').hide();
			$('.main_menu').show();
		}
	})
})
