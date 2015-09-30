	$(function() {
		var auto_selected_lang = ""; //現在はデフォルトは英語

		if (i18n.lng() === "en" || i18n.lng() === "ja") { }
		else {
			auto_selected_lang = (navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage || navigator.browserLanguage)).substr(0, 2);
		}

		i18n.init({ 
			lng: auto_selected_lang,
			fallbackLng: auto_selected_lang
		}).done(function() {
			$("body").i18n();
		});

		$("#trans-ja").click(function() {
			i18n.setLng('ja-JP');
			i18n.init({ lng: "ja", fallbackLng: "ja" }).done(function() {
				$("body").i18n();
			});
		});
		$("#trans-en").click(function() {
			i18n.setLng('en-US');
			i18n.init({ lng: "en", fallbackLng: "en" }).done(function() {
				$("body").i18n();
			});
		});
	});
