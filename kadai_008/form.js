$(function () {
	// class属性がbtnの要素がクリックされたら
	$('.btn').on('click', function () {
		// .text-boxに入力された(テキストボックス)を取得する
		$('.text-box').val('クリックしました！');
	});
});