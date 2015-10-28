$('.bxslider').bxSlider({
	
});

/*
 * HTMLのDOMの読み込みが終わったら、処理する
 */
$(document).ready(function() {
	$('.bxslider').bxSlider({
		auto: 'true',
		infiniteLoop: 'true',
		mode: 'fade',
		speed: 500,
		hideControlOnEnd: 'true',
		captions: 'true'
	});

	//$('#product header ul img.hide').css('display','block');
});


/*
 * HTMLのDOM、画像、CSS、JSなどの読み込みが終わったら、処理する
 */
$(window).load(function() {
	//2秒間静止
	$('#product header ul img.hide').delay(2000).queue(function(next) {
		$(this).css('display','block');
		next();
	});
});
