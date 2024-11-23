$(function () {
	// id属性がchange-colorの要素がクリックされたら
	$('#change-color').on('click', function() {
		// id属性がtargetの要素のcolorプロパティをredにする
		$('#target').css('color', 'red');
	});
	// id属性がchange-textの要素がクリックされたら
	$('#change-text').on('click', function() {
		// id属性がtargetの要素の文字内容を変更する
		$('#target').text('Hello!');	
	});
	// id属性がfade-Outの要素がクリックされたら
	$('#fade-Out').on('click', function() {
		// id属性がtargetの要素をフェードアウト（消える）する
		$('#target').fadeOut();
	});
	// id属性がfade-Inの要素がクリックされたら
	$('#fade-In').on('click', function() {
		// id属性がtargetの要素がフェードイン（表示）する
		$('#target').fadeIn();
	});
});