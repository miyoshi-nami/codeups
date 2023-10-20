
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  //ナビバートグル
  $('.js-hamburger').on('click', function () {
    if ($('.js-hamburger').hasClass('is-open')) {
      $('.js-drawer-menu').fadeOut();
      $(this).removeClass('is-open');
    } else {
      $('.js-drawer-menu').fadeIn();
      $(this).addClass('is-open');
    }
  });


  // ページ内リンクがクリックされたときの処理
  $('#menu a').on('click', function (event) {
    // href属性の値を取得
    var href = $(this).attr('href');

    // href属性の値が # で始まる場合に処理を実行
    if (href.startsWith('#')) {
      // ドロワーメニューを非表示にする処理を追加
      $('.js-drawer-menu').fadeOut();
      // ドロワーメニューのトグルボタンのis-openクラスを削除
      $('.js-hamburger').removeClass('is-open');
    }
  });

  //slick1のスライダー
  $(".slider1")
    // 最初のスライドに"add-animation"のclassを付ける(data-slick-index="0"が最初のスライドを指す)
    .on("init", function () {
      $('.slick-slide[data-slick-index="0"]').addClass("add-animation");
    })
    // 通常のオプション
    .slick({
      autoplay: true, // 自動再生ON
      fade: true, // フェードON
      arrows: false, // 矢印OFF
      speed: 2000, // スライド、フェードアニメーションの速度1000ミリ秒
      autoplaySpeed: 4000, // 自動再生速度4000ミリ秒
      pauseOnFocus: false, // フォーカスで一時停止OFF
      pauseOnHover: false, // マウスホバーで一時停止OFF
    })
    .on({
      // スライドが移動する前に発生するイベント
      beforeChange: function (event, slick, currentSlide, nextSlide) {
        // 表示されているスライドに"add-animation"のclassをつける
        $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
        // あとで"add-animation"のclassを消すための"remove-animation"classを付ける
        $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
      },
      // スライドが移動した後に発生するイベント
      afterChange: function () {
        // 表示していないスライドはアニメーションのclassを外す
        $(".remove-animation", this).removeClass(
          "remove-animation add-animation"
        );
      },
    });



  //slick2のスライダー
  $(".slider2").slick({
    autoplay: false,
    dots: false,
    swipe: true,
    variableWidth: true,
    // prevArrow: $('.custom-prev-arrow'),
    // nextArrow: $('.custom-next-arrow'),
    prevArrow: '<img src="./assets/images/common/arrow-l.png" class="slide-arrow arrow__prev" alt="左矢印" >',
    nextArrow: '<img src="./assets//images/common/arrow-r.png" class="slide-arrow arrow__next" alt="右矢印" >',
    infinite: false,// ループ再生を無効にする
  });

  //要素の取得とスピードの設定
  var box = $('.colorbox'),
    speed = 700;

  //.colorboxの付いた全ての要素に対して下記の処理を行う
  box.each(function () {
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
      image = $(this).find('img');
    var counter = 0;

    image.css('opacity', '0');
    color.css('width', '0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function () {
      if (counter == 0) {
        $(this).delay(200).animate({ 'width': '100%' }, speed, function () {
          image.css('opacity', '1');
          $(this).css({ 'right': '0', 'left': 'auto' });
          $(this).animate({ 'width': '0%' }, speed);
        })
        counter = 1;
      }
    });
  });

  //pagetop
$(function() {
  var topBtn = $('.gotop');    
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
  //ボタンの表示方法
  topBtn.fadeIn();
  } else {
  //ボタンの非表示方法
  topBtn.fadeOut();
  }
  });
  //スクロールしてトップ
  topBtn.click(function () {
  $('body,  html').animate({
  scrollTop: 0
  },   500);
  return false;
  });
  });
});
