$(document).ready(function(){
	$.easing.def = "easeOutBounce";
	$('li.button a').click(function(e){
		var abc = $(this).parent().next();
		$('down').not(abc).slideUp('slow');
		abc.slideToggle('slow');
		e.preventDefault();
	});
});