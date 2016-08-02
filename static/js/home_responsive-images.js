$(function() {
	$(window).setBreakpoints({distinct: true,breakpoints: [1, 921]});
	$(window).bind('enterBreakpoint921',function() {　//'enterBreakpoint***'***の箇所は上で指定したブレイクポイントの数値を指定する
		$('.responsive-images').each(function() {
			$(this).attr('src', $(this).attr('src').replace('_mobile', '_pc'));
		});
	});
	$(window).bind('enterBreakpoint1',function() {
		$('.responsive-images').each(function() {
			$(this).attr('src', $(this).attr('src').replace('_pc', '_mobile'));
		});
	});
});
