$(function(){
	$(".notice> ul> li").click(function(){
		$(this).children(".text_info").slideToggle();
		$(this).siblings().children(".text_info").slideUp();
	});



	$(".down_btn").click(function(){
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
        delay: 1000,
        disableOnInteraction: false,
      },
      //loop: true,
    });

    
    $(window).scroll(function() {
      var height = $(window).scrollTop();
      if (height > 100) {//아이콘이 나타나길 원하는 높이를 설정하세요
          $('#top_btn').fadeIn();//나타날 아이콘 클래스 수정!
      } else {
          $('#top_btn').fadeOut();//나타날 아이콘 클래스 수정!
      }
    });
    
   

});








