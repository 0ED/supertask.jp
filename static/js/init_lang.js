$(function(){
	i18n.init({
		resGetPath: language_path
	}, function(err, t) {
		var auto_selected_lang = ''; //現在はデフォルトは英語

		if (i18n.lng() === 'en' || i18n.lng() === 'ja') {
			/* キャッシュがあるとき */
			auto_selected_lang = i18n.lng();
		}
		else {
			/*キャッシュがなく、どの言語にするべきか、わからない場合。*/
			auto_selected_lang = (navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage || navigator.browserLanguage)).substr(0, 2);
		}
		i18n.setLng(auto_selected_lang);
		$("div#mainTopic").i18n();
	});

	function change_lang() {
		$("div#mainTopic").i18n();
	}

	function set_font_ja() {
		change_lang();
		$("#mainTopic").css('font-family', '"skia","Meiryo","Hiragino Kaku Gothic Pro"');
		$("#home #mainTopic header #aboutme h1").fitText(1.5,{minFontSize:'12px',maxFontSize: '72px'});
		$("#home #mainTopic header #aboutme p").fitText(1.9,{minFontSize:'9px',maxFontSize: '64px'});

		$("#home #mainTopic article section h2").fitText(1.4,{minFontSize:'28px',maxFontSize: '72px'});
		$("#home #mainTopic article section p").fitText(3.8,{minFontSize:'14px',maxFontSize: '48px'});
		$("#home #mainTopic article section .hobbies h3").fitText(1.3,{minFontSize:'11px',maxFontSize: '62px'});
		$("#home #mainTopic article section .hobbies p").fitText(1.5,{minFontSize:'9px',maxFontSize: '54px'});
		$("#home #mainTopic article section ul > li").fitText(2.1,{minFontSize:'12px',maxFontSize: '74px'});
		$("#home #mainTopic article section ul > ul > li").fitText(2.3,{minFontSize:'10px',maxFontSize: '54px'});
		$("#home #mainTopic article section ul > ul > li").fitText(2.4,{minFontSize:'7px',maxFontSize: '54px'});
	}

	function set_font_en() {
		change_lang();
		$("#mainTopic").css('font-family', '"Skia","Meiryo","Hiragino Kaku Gothic Pro"');
		$("#home #mainTopic header #aboutme h1").fitText(1.0,{minFontSize:'12px',maxFontSize: '72px'});
		$("#home #mainTopic header #aboutme p").fitText(1.4,{minFontSize:'9px',maxFontSize: '64px'});

		$("#home #mainTopic article section h2").fitText(1.4,{minFontSize:'22px',maxFontSize: '72px'});
		$("#home #mainTopic article section p").fitText(2.2,{minFontSize:'16px',maxFontSize: '38px'});
		$("#home #mainTopic article section .hobbies h3").fitText(1.3,{minFontSize:'11px',maxFontSize: '42px'});
		$("#home #mainTopic article section .hobbies p").fitText(1.4,{minFontSize:'9px',maxFontSize: '38px'});
		$("#home #mainTopic article section ul > li").fitText(2.0,{minFontSize:'12px',maxFontSize: '74px'});
		$("#home #mainTopic article section ul > ul > li").fitText(2.4,{minFontSize:'7px',maxFontSize: '54px'});
	}


	var auto_selected_lang = i18n.lng().substr(0,2);
	if (auto_selected_lang === "ja") { set_font_ja(); }
	else if (auto_selected_lang === "en") { set_font_en(); }
	//else { set_font_en(); }

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
