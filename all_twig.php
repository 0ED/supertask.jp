<?php
require_once dirname(__FILE__).'/vendor/autoload.php';

// memo: https://techpunch.co.uk/development/render-string-twig-template-symfony2

class GlobalNavi {
	public $path;
	public $id;
	public $title;
}

/*
 * ToyTwigクラス．
 */
class ToyTwig extends BaseTwig {
	public function __construct($id, $relative_path) {
		parent::__construct($id, $relative_path);
		$this->error_article = "You missed reading a article.<br />Please send a message of error to administrator (i1558129@cse.kyoto-su.ac.jp).<br /><br />記事の読み込みに失敗しました．<br />管理者(i1558129@cse.kyoto-su.ac.jp)にメールしてください．<br />";
		$this->default_key_line = 'Parsing,Introduction';
	}

	public function getHTML() {
		$html_tmp = parent::getHTML();
		$twig = new Twig_Environment(new Twig_Loader_String());
		return $twig->render($html_tmp, array('static_path'=>$this->static_path));
	}

	public function getJson() {
		$a_json = parent::getJson();
		$root = $this->relative_path.'/static/articles/toy/';
		
		if (isset($_GET['key_line'])) $key_line = $_GET['key_line'];
		else $key_line = $this->default_key_line;

		list($l_link, $detail_link) = explode(',', $key_line);	//ex. Network,Introduction
		$page_path = $root.$l_link.'/'.$detail_link.'.html';		//ex. static/articles/toy/Network/Introduction.html
		$l_links = $this->get_order_links($root);					//ex. [Network, Parsing, Graphics, Other]
		$detail_links = $this->get_order_links($root.$l_link.'/'); //detail_links of Network link.  ex. [Introduction, Kademlia, P2P]
		$my_article = @file_get_contents($page_path);
		if (!$my_article) {  $my_article = $this->error_article; }

		$a_json = array_merge($a_json,array('l_link_active'=>$l_link, 'l_links'=>$l_links, 'detail_links'=>$detail_links, 'my_article'=>$my_article));

		return $a_json;
	}

	/*
	 * 指定されたパスにあるorder.txtのリンク一覧を返す．
	 */
	public function get_order_links($path) {
		$l_links = array();
		$rf = fopen($path.'order.txt', 'r');
		while ($line = fgets($rf)) {
			array_push($l_links, trim($line));
		}
		fclose($rf);

		return $l_links;
	}
}


class BaseTwig {
	
	/*
	 * HTMLを吐き出すためのTwigオブジェクト．
	 */
	private $twig;

	/*
	 * コンストラクタ．プロパティを設定して応答する．
	 */
	public function __construct($id, $relative_path) {
		$this->ids = array('home','product','toy','link');
		$this->id = $id;
		$this->static_path = $relative_path.'/static';
		$this->relative_path = $relative_path;
	}

	/*
	 * テンプレートエンジンによって生成したHTMLの結果を出力して応答する．
	 */
	function printHTML() {
		echo $this->getHTML($this->id);
	}

	/*
	 * テンプレートエンジンによって生成したHTMLの結果を応答する．
	 */
	public function getHTML() {
		$loader = new Twig_Loader_Filesystem(dirname(__FILE__).'/templates');
		$twig = new Twig_Environment($loader);
		return $twig->render($this->id.'_template.html', $this->getJson());
	}


	/*
	 * テンプレートに必要なJson形式の引数を応答する．
	 */
	public function getJson() {
		$current_i = array_search($this->id,$this->ids,true);
		$titles = array_map('strtoupper', $this->ids);
		$pathes = $this->ids;
		$pathes[0] = '';

		$globalNavis = array();
		for($i = 0; $i < count($this->ids); ++$i) {
			$globalNavis[$i] = new GlobalNavi();
			$globalNavis[$i]->path = $this->relative_path.'/'.$pathes[$i];
			$globalNavis[$i]->id = $this->ids[$i];
			$globalNavis[$i]->title = $titles[$i];
		}

		return array(
			'id' => $this->ids[$current_i],
			'title' => $titles[$current_i],
			'static_path' => $this->static_path,
			'global_navis' =>  $globalNavis
		);
	}
}

/*
 * テンプレートエンジンによって生成したHTMLの結果を出力して応答する．
 */
function main() {
	$aBaseTwig = new ToyTwig('home', '.');
	//$abasetwig->printHTML();
	$aBaseTwig->getHTML();
}

/*
 * ファイルが直接呼び出された時にだけ実行．
 */
/*
if (realpath($argv[0]) == __FILE__) {
	main();
}
*/

?>
