$(function() {

	// Custom JS
	// Back to Top
	var $btnTop = $(".scrollTop")
	$(window).on("scroll", function (){
		if ($(window).scrollTop() >= 500) {
			$btnTop.fadeIn();
		} else {
			$btnTop.fadeOut();
		}
	});
	$btnTop.on("click", function(){
		$("html,body").animate({scrollTop: 0}, 1000)
	});
	// END Back to Top
	
	//  Smooth Scroll
	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
		bl_top = $(target).offset().top - 100;
		$('body, html').animate({scrollTop: bl_top}, 700);
		return false;
	});
	// END  Smooth Scroll

	$("#toggle").click(function() {
		$("#galleryHiden").slideToggle();
	});


//   function validateContact() {
// 	var valid = true;
// 	$("#forM input[required=true], #forM textarea[required=true]").each(function(){
// 		$(this).removeClass('invalid');
// 		$(this).attr('title','');
// 		if(!$(this).val()){ 
// 			$(this).addClass('invalid');
// 			$(this).attr('title','This field is required');
// 			valid = false;
// 		}
// 		if($(this).attr("type")=="email" && !$(this).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)){
// 			$(this).addClass('invalid');
// 			$(this).attr('title','Enter valid email');
// 			valid = false;
// 		}  
// 	}); 
// 	return valid;
// }
// For Form Validation
	$(function() {
		$( document ).tooltip({
			position: {my: "left top", at: "right top"},
			items: "input[required=true], textarea[required=true]",
			content: function() { return $(this).attr( "title" ); }
		});
});
	// for Phone validation
	jQuery(function($){
   $("#Phone").mask("+99(999) 999-99-99"); 
	});



});



