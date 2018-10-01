jQuery(function($) {
	//ウィンドウオブジェクトを取得する
	var $window = $(window);
	//ヘッダオブジェクトを取得
	var header = $('header');
	//ブロック要素のオブジェクトを取得する
	var block = $('.block');
	//ヘッダのオフセットを取得する
	var offset = header.offset();
	//ボタンオブジェクトを取得する
	var button = $('header button');
	//ヘッダのナビゲーション要素のオブジェクトを取得する
	var list = $('header nav');

	//ボタンが押された時, リスト出力する
	button.on('click', function() {
		//スライドエフェクトでリストを表示する
		list.slideToggle();
	});

	
});
