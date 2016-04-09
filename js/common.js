// ロールオーバー
$(function(){	
	$('.rollover').each(function(){
		var navBtn = $(this).find("img");

		var srcOff = navBtn.attr("src");
		var srcOn = srcOff.replace("Off", "On");

		$(this).hover(function(){
			
			navBtn.attr("src", srcOn);
		}, function(){
			navBtn.attr("src", srcOff);
		});
		
	});
});
//スクロール時
$(window).scroll(function () {
	if($('html, body').scrollTop() > 640){
		$('#divNav').css('top', '100px');
	}else{
		$('#divNav').css('top', 640 - $('html, body').scrollTop() + 'px');
	}
});