/* HTMLのheadの読み込みが終わったら，処理する． */
$('html head').ready(function() {
	$('nav#globalnavi ul, nav#globalnavi #lang_select').css('visibility','visible');
	$('nav#globalnavi ul, nav#globalnavi #lang_select').css('height','auto');
});

/* HTMLのDOM、画像、CSS、JSなどの読み込みが終わったら，処理する． */
$(window).load(function() {
});
