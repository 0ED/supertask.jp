/*
$('.bxslider').bxSlider({
  nextSelector: '#slider-next',
  prevSelector: '#slider-prev',
  nextText: 'Onward →',
  prevText: '← Go back'
});
*/
$('.bxslider').bxSlider({
	
});
$(document).ready(function(){
	$('.bxslider').bxSlider({
		auto: 'true',
		infiniteLoop: 'true',
		mode: 'fade',
		speed: 500,
		hideControlOnEnd: 'true',
		captions: 'true'
	});
});
