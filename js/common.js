$(function() {
  // script 영역

  // scroll 반응 영역
  $(window).scroll(function() {
    let winHeight = $(window).height();
    let scrTop = $(this).scrollTop();

    // 상단바 반응 영역
    if (scrTop >= winHeight) {
      $('header').addClass('fixed');
    } else {
      $('header').removeClass('fixed');
    }

    // ani 반응 영역
    $('.mov').each(function() {
      let thisOffset = $(this).offset();
      console.log(thisOffset);
      if(scrTop >= thisOffset.top - 300 && scrTop < thisOffset.top + winHeight) {
        $(this).find('h2').addClass('ani');
        $(this).find('.htu-slider-wrapper').addClass('ani');
        $(this).find('h3').addClass('ani');
        $(this).find('.service-tap-wrapper').addClass('ani');
        $(this).find('.tap-service-wrapper').addClass('ani');
        $(this).find('.news-slider-wrapper').addClass('ani');
        $(this).find('.faq-tab').addClass('ani');
        $(this).find('.faq-tab-wrapper').addClass('ani');
      }
    });
    $('.vehicle h2').removeClass('ani');
    $('.vehicle h3').removeClass('ani');

    // 첫번째 섹션(about) 반응 영역
    $('.about .row').each(function() {
      let thisOffset = $(this).offset();
      if(scrTop >= thisOffset.top - 800 && scrTop < thisOffset.top + 480) {
        $(this).find('.txt-box').addClass('ani');
        $(this).find('.img-box').addClass('ani');
      }
    });

    // 두번째 섹션(value) 반응 영역
    if(scrTop >= $('.value').offset().top - 200) {
      $('.value h3').addClass('ani'); // 두번째 섹션(value)
    }
    if(scrTop >= $('.value').offset().top) {
      $('.value li').addClass('ani'); // 두번째 섹션(value)
    }

  });

  // 메인배너 .info의 count 반응 영역
  let cntNum = $('.info dd span');
  cntNum.each(function() {
    // console.log($(this)); // 확인용
    $(this).prop('Counter', 0).animate({Counter: $(this).text()}, {
      duration: 4000,
      easing: 'swing',
      step: function(now) {
        // let ceilNum = Math.ceil(now);
        $(this).text(Math.ceil(now));
      }
    })
  });

  // 메인배너 .car의 이동 반응 영역
  $('.car').animate({
    left: '0px',
    opacity: '1'
  }, 1000);

  // 다섯번째 섹션(news)의 on클래스 추가(뉴스 display)
  $('.swiper span').click(function() {
    $('.swiper span').removeClass('active');
    $(this).addClass('active');
    $('.swiper-wrapper').removeClass('on');
    $('.swiper-wrapper').eq($(this).index()).addClass('on');
  });

  // 여섯번째 섹션(faq)의 li에 on클래스 추가
  $('.faq-list li').click(function() {
    $('.faq-list li').removeClass('on');
    $(this).addClass('on');
  });

  // 여섯번째 섹션(faq)의 .faq-tab-wrapper 새로 추가하기
   let tabFaqId = [1, 2, 3];
   let taqListCon = [
     
   ];
  $('.faq-tab li').click(function() {
    $('.faq-tab li').removeClass('active');
    $(this).addClass('active');

  });
});
