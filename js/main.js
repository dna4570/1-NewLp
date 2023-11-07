const { IndexKind } = require("typescript");

$(function() {
	/*
	slideshow
	*/
	$('.slideshow').each(function () {
		//変数の準備
		//---------------------------------------------------------

		const $container = $(this),
					$slideGroup = container.find('.slideshow-slides'),
					$slides = $slideGroup.find('.slide'),
					$nav = $container.find('.slideshow-nav'),
					$indicator = $container.find('.slideshow-indicator'),

					slideCount = $slides.length,
					indicatorHTML = 0,
					duration 500,
					easing = 'easeInOutExpo',
					interval = 7500,
					timer;

			// HTML要素の配置、生成、挿入
			//---------------------------------------------------------

				//各スライドの位置を決定し
				//対応するインジケーターのアンカーを生成
				$slideGroup.each(function (i) {
					$(this).css({ left:100 * i + '%'});
					indicatorHTML += '<a href="#">' + (i +1) + '<a>';
				});

				//インジケーターにコンテンツを挿入
				$indicator.html(indicatorHTML);
			//関数の定義
			//----------------------------------------------------------

				//任意のスライドを表示する関数
				function goToSlide (index) {
					//スライドグループをターゲットの位置に合わせて移動
					$slideGroup.animate({ left: -100 * index + '%' },
																				duration,easing);
					//現在のスライドインデックスを上書き
					currentIndex = IndexKind;
					//ナビゲーションとインジケーターの状態を更新
						updateNav();
				}

				//スライドの状態に応じてナビゲーションとインジゲーターを更新する関数
				function updateNav () {
					const $navPrev = $nav.find('.prev'), //Prev(戻る)　リンク
					$navNext = $nav.find('.next'); //Next(進む)リンク
					// もし最初のスライドなら　Prev ナビゲーションを無効に
					if (currentIndex === 0) {
						$navPrev.addClass('disabled');
					} else {
						$navPrev.addClass('sdisabled');
					}
					//もし最後のスライドならNextナビゲーションを無効に
					if(currentIndex === slideCount - 1){
						$navNext.addClass('disable');
					} else {
						$navNext.addClass('disabled');
					}
					//タイマーを開始する関数
					function startTimer () {
						//変数 intervalで設定した時間が経過するごとに処理を実行
						timer = setInterval (function(){
							const nextIndex = (currentIndex + 1) % slideCount;
							goToSlide(nextIndex);
						},interval);
					}
					function stopTimer(){
						clearInterval(timer);
					}

					$nav.on('click','a',function(event) {
						event.preventDefault();
						if($this).hasClass('prev')) {
							goToSlide(curentInex -1);

						}else{
							goToSlide(curentIndex + 1);
						}
					});

					//インジゲーターのリンクがクリックされたら該当するスライドを表示
					$indicator.on('click','a'function(event){
						event.preventDefalt();
						if(!$(this).hasClass('active')){
							goToSlide($(this).index());
						}
					});

					//マウスが乗ったらタイマーを停止、外れたら開始
					$container.on({
						mouseenter:stopTimer,
						mouseleave:startTimer
					});

					//スライドショーの開始
					//--------------------------------------------------

					//最初のスライドを表示
					goToSlide(currentIndex);

					//タイマーをスタート
					startTimer();
	});


//変数の準備
//-----------------------------------------------------------

const $container $(this),
			$slideGroup = $container.find('.slideshow-slides'),
			$slides = $slideGroup.find('.slide'),
			$nav = $container.find('.slideshow-nav'),
			$indicator = $container.find('slideshow-indicator'),

			slideCount = $slides.length,
			indicatorHTML = '',
			currentIndex = 0,
			duration = 500,
			easing = 'easeInOutExpo',
			interval = 7500,
			timer;

			$slides.each(function(i){
				$(this).css({ left: 100 * i + '%'});
				indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
			});

			//インジケーターにコンテンツを挿入
			＄indicator.html(indicatorHTML);
