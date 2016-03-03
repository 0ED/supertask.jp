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
});
