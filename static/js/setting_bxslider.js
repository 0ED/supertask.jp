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
		pause: 8000, //default:4000
		speed: 700,
		hideControlOnEnd: 'true',
		captions: 'true',
		onSliderLoad: function() {
			$('#product header .bx-pager').css('visibility','visible');
			$('#product #localnavi .twin_block').css('visibility','visible');
		}
	});
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
