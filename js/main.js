(function() {
    // 스크롤시작위치
    var sc = 0;

    // 탑버튼
    toggleBtnTop();
    function toggleBtnTop() {
        var btnTop = $('.top_wrap .btn_top');
        btnTop.hide();
        $(window).scroll(function() {
            sc = $(this).scrollTop();
    
            if(sc > 300) {
                btnTop.fadeIn();
            } else {
                btnTop.fadeOut();
            }
        }).trigger('scroll');
    
        btnTop.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0});
        });
    }

    
    // 푸터 하단 패밀리사이트
    // slideToggle기능
    $('.right_footer .family .btn_family').on('click', function() {
        $('.right_footer .family .list_family').slideToggle();
    });


    // 메인슬라이더
    var mainSlider = new Swiper('.main_slider', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        speed:1000,
        simulateTouch:false,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000,
        },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
       
    });


    // 메인메뉴슬라이더
    var eventSlider = new Swiper('.event_slider', {
        //   loop: true,
          slidesPerView: 4,
          spaceBetween: 30,

          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },


      });


    //   로그인 페이지
    // 포커스가 아이디영역에 가있음
    $('#container .user_id').focus();

    // 예약페이지 탭메뉴
    // 클릭이벤트
    $('.tab .list_tab').on('click', function(e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');

        var idx = $(this).index();
        console.log(idx);
    });


})();









