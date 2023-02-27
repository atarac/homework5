$(function () {
  //ハンバーガーメニューのアクション
  $('#hamburger').click(function() {
    $(this).toggleClass('active');
    $('.hidden').toggleClass('active');
    $('.cover').toggleClass('active');
    $('header .visible').toggleClass('active');
  });

  //naviメニュー内のアクション
  $('.hidden a').click(function() {
    $('#hamburger').removeClass('active');
    $('.hidden').removeClass('active');
    $('.cover').removeClass('active');
    $('header .visible').removeClass('active');
  });

  //カルーセルのアクション
  $('.carusel').slick ({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: 'linear',
    arrows: false,
    swipe: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    centerMode: true,
    centerPadding: "8%",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //画像：下からフェードイン
  $(window).scroll(function() {
    $('.feature-list .picture img').each(function () {
      const scroll = $(window).scrollTop();
      const elemPos = $(this).offset().top;
			const windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
				$(this).addClass('fadein');
      }
    });
  });

  //スムーススクロール
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    let speed = 500;
    // スクロールタイプ
    let type = 'swing';
    // href属性の取得
    let href= $(this).attr('href');
    // 移動先の取得
    let target = $(href == "#" ? 'html' : href);
    //ヘッダーの高さ取得
    let header_height = $('header .visible').height();
    // 移動先のポジション取得
    let position = target.offset().top - header_height;
    // animateでスムーススクロール
    $('body,html').animate({scrollTop:position}, speed, type);
    return false;
  });
});