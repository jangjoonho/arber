$(function(){
	$(".notice> ul> li").click(function(){
		$(this).children(".text_info").slideToggle();
		$(this).siblings().children(".text_info").slideUp();
	});
});

$(function(){
	$(".notice> ul> li").click(function(){
		$(this).toggleClass("turn");
		
		if($(this).hasClass("turn")===true){
				$(this).siblings().removeClass("turn");
			
		}
  });
	var jbOffset = $( '#header, #top2>a, #top>li>a, #gnb>li>a, #header>a' ).offset();
        /*선택자는 본인 구조에 맞게 수정*/
        $( window ).scroll( function() {
          if ( $( document ).scrollTop() > 100) {//여기 지정된 길이 이후부터 적용됩니다
            $( '#header, #top2>a, #top>li>a, #gnb>li>a, #header>a'  ).addClass("on");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
          }
          else {
            $( '#header, #top2>a, #top>li>a, #gnb>li>a, #header>a' ).removeClass("on");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
          }
        });

		//프로모션설정
		var swiper = new Swiper(".promotion", {
      slidesPerView: 2.5,
      spaceBetween: 20,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });
		//메인배너설정
		var swiper = new Swiper(".mb", {
      spaceBetween: 30,
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      //loop: true,
    });

    //체크인부분

    $( "#datepicker1" ).datepicker();
        } );
        $.datepicker.setDefaults({
          dateFormat: 'yy-mm-dd' //Input Display Format 변경
        });
        $.datepicker.setDefaults({
          monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
          ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
          ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
          ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
        });

        $( function() {
          $( "#datepicker2" ).datepicker();
        } );
        $.datepicker.setDefaults({
          dateFormat: 'yy-mm-dd' //Input Display Format 변경
        });
        $.datepicker.setDefaults({
          monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
          ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
          ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
          ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
      
      
        });
        $(window).scroll(function() {
          var height = $(window).scrollTop();
          if (height > 100) {//아이콘이 나타나길 원하는 높이를 설정하세요
              $('#top_btn').fadeIn();//나타날 아이콘 클래스 수정!
          } else {
              $('#top_btn').fadeOut();//나타날 아이콘 클래스 수정!
          }
      });





