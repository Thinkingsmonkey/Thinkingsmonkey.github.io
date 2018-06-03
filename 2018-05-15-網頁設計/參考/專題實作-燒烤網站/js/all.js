jQuery(document).ready(function($) {
	$(document).scroll(function(event) {
	  
	  if ($(document).scrollTop()>0) {
	  	$('.navbar').addClass('active');
	  }
	  
	  else{
	  	$('.navbar').removeClass('active');
	  }
	  
	});
});