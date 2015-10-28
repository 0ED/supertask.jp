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
		captions: 'true',
		onSliderLoad: function() {
			$('#product header div.bx-pager').css('visibility','visible');
			$('#product div#localnavi div.twin_block').css('visibility','visible');
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
