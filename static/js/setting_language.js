$(window).load(function() {
	$('#home header div#lightfox-anime img').css('visibility','visible');
});


$(function() {
	function setting_font_for_both() {
		$("div#mainTopic").i18n(); //変える
	}

	function setting_font_for_ja() {
		setting_font_for_both();
		$("#home div#mainTopic header div#aboutme").css('font-family', '"$B%a%$%j%*(B","Meiryo","Hiragino Kaku Gothic Pro"');
		$("#home #mainTopic header #aboutme h1").fitText(1.5,{minFontSize:'12px',maxFontSize: '72px'});
		$("#home #mainTopic header #aboutme p").fitText(1.4,{minFontSize:'9px',maxFontSize: '64px'});
		$("#home #mainTopic article section h2").fitText(1.7,{minFontSize:'32px',maxFontSize: '72px'});
		$("#home #mainTopic header #aboutme p").fitText(1.9,{minFontSize:'9px',maxFontSize: '64px'});
		$("#home #mainTopic article section .hobbies p").fitText(1.4,{minFontSize:'14px',maxFontSize: '38px'});
		$("#home #mainTopic article section .hobbies h3").fitText(1.1,{minFontSize:'16px',maxFontSize: '42px'});
	}

	function setting_font_for_en() {
		setting_font_for_both();
		$("#home div#mainTopic header div#aboutme").css('font-family', 'serif');
		$("#home #mainTopic header #aboutme h1").fitText(1.0,{minFontSize:'12px',maxFontSize: '72px'});
		$("#home #mainTopic header #aboutme p").fitText(1.4,{minFontSize:'9px',maxFontSize: '64px'});
		$("#home #mainTopic article section h2").fitText(1.1,{minFontSize:'28px',maxFontSize: '72px'});
		$("#home #mainTopic article section p").fitText(1.8,{minFontSize:'9px',maxFontSize: '38px'});
		$("#home #mainTopic article section .hobbies p").fitText(1.4,{minFontSize:'14px',maxFontSize: '38px'});
		$("#home #mainTopic article section .hobbies h3").fitText(1.1,{minFontSize:'16px',maxFontSize: '42px'});
	}

	if (i18n.lng() === "ja") { setting_font_for_ja(); }
	else if (i18n.lng() === "en") { setting_font_for_en(); }



	$("#trans-ja").click(function() {
		i18n.init({ lng: "ja", fallbackLng: "ja" }).done(function() {
			setting_font_for_ja();
		});
	});
	$("#trans-en").click(function() {
		i18n.init({ lng: "en", fallbackLng: "en" }).done(function() {
			setting_font_for_en();
		});
	});

});
