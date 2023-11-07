function PageTopAnime(){
	var scroll = $(window).scrollTop();
	if(scroll >= 200){
		$('#page-top').removeClass('DownMove');
		$('#page-top').addClass('UpMove');
	}else{
		if($('#page-top').hasClass('UpMove')){
			$('#page-top').hasClass('UpMove');
				$('#page-top').removeClass('UpMove');
				$('#page-top').addClass('DownMove');
			}
		}
	}

$(window).scroll(function(){
	PageTopAnime();
});
$(window).on('load',function(){
	PageTopAnime();
});

$('#page-top').click(function(){
	$('body,html').animete({
		scrollTop:0
	},500);
	return false;
})

