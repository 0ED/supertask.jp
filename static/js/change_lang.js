$(window).load(function() {
	$('#home header div#lightfox-anime img').css('visibility','visible');
});


$(function() {
	function change_lang() {
		$("div#mainTopic").i18n(); //変える
	}

	function set_font_ja() {
		change_lang();
		$("#home div#mainTopic header div#aboutme").css('font-family', '"Skia","Meiryo","Hiragino Kaku Gothic Pro"');
		$("#home #mainTopic header #aboutme h1").fitText(1.5,{minFontSize:'12px',maxFontSize: '72px'});
		$("#home #mainTopic header #aboutme p").fitText(1.9,{minFontSize:'9px',maxFontSize: '64px'});

		$("#home #mainTopic article section h2").fitText(1.4,{minFontSize:'28px',maxFontSize: '72px'});
		$("#home #mainTopic article section p").fitText(2.8,{minFontSize:'14px',maxFontSize: '38px'});
		$("#home #mainTopic article section .hobbies p").fitText(1.4,{minFontSize:'9px',maxFontSize: '38px'});
		$("#home #mainTopic article section .hobbies h3").fitText(1.1,{minFontSize:'16px',maxFontSize: '42px'});
	}

	function set_font_en() {
		change_lang();
		$("#home div#mainTopic header div#aboutme").css('font-family', 'serif');
		$("#home #mainTopic header #aboutme h1").fitText(1.0,{minFontSize:'12px',maxFontSize: '72px'});
		$("#home #mainTopic header #aboutme p").fitText(1.4,{minFontSize:'9px',maxFontSize: '64px'});

		$("#home #mainTopic article section h2").fitText(1.4,{minFontSize:'22px',maxFontSize: '72px'});
		$("#home #mainTopic article section p").fitText(2.2,{minFontSize:'16px',maxFontSize: '38px'});
		$("#home #mainTopic article section .hobbies p").fitText(1.4,{minFontSize:'9px',maxFontSize: '38px'});
		$("#home #mainTopic article section .hobbies h3").fitText(1.1,{minFontSize:'14px',maxFontSize: '42px'});
	}

	if (i18n.lng() === "ja") { set_font_ja(); }
	else if (i18n.lng() === "en") { set_font_en(); }

	$("#trans-ja").click(function() {
		i18n.init({ lng: "ja", fallbackLng: "ja" }).done(function() {
			set_font_ja();
		});
	});
	$("#trans-en").click(function() {
		i18n.init({ lng: "en", fallbackLng: "en" }).done(function() {
			set_font_en();
		});
	});

});
