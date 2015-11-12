$(window).load(function() {
	$('#about header div#lightfox-anime img').css('visibility','visible');
});


$(function() {
	function setting_font_for_both() {
		$("#about div#mainTopic").i18n();
	}

	function setting_font_for_ja() {
		setting_font_for_both();
		$("#about div#mainTopic header div#aboutme").css('font-family', '"メイリオ","Meiryo","Hiragino Kaku Gothic Pro"');
		$("#about #mainTopic header #aboutme h1").fitText(1.5,{minFontSize:'12px',maxFontSize: '72px'});
		$("#about #mainTopic header #aboutme p").fitText(1.9,{minFontSize:'9px',maxFontSize: '64px'});
	}

	function setting_font_for_en() {
		setting_font_for_both();
		$("#about div#mainTopic header div#aboutme").css('font-family', 'serif');
		$("#about #mainTopic header #aboutme h1").fitText(1.0,{minFontSize:'12px',maxFontSize: '72px'});
		$("#about #mainTopic header #aboutme p").fitText(1.4,{minFontSize:'9px',maxFontSize: '64px'});
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
