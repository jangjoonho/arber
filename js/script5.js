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

    
    $(".notice> ul> li").click(function(){
      $(this).toggleClass("turn");
      
      if($(this).hasClass("turn")===true){
          $(this).siblings().removeClass("turn");
        
      }
    });

    $(window).scroll(function() {
      var height = $(window).scrollTop();
      if (height > 100) {//아이콘이 나타나길 원하는 높이를 설정하세요
          $('#top_btn').fadeIn();//나타날 아이콘 클래스 수정!
      } else {
          $('#top_btn').fadeOut();//나타날 아이콘 클래스 수정!
      }
    });

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

$(document).ready(function () {

  //처음들어갔을때 모습 만들기...
  $(".tab_content").hide(); //tab_content 부분을 모두 숨김.
  $("ul.tabs li:first").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
  $(".tab_content:first").show(); //tab_contents중 첫번째꺼를 보여줌

  //On Click Event
  $("ul.tabs li").click(function () {

      $("ul.tabs li").removeClass("active"); //Remove any "active" class
      $(this).addClass("active"); //선택한 탭에만 active클래스 붙임
      $(".tab_content").hide(); //모든 contents들 숨김

      var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
      /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
      .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
      $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
      return false;
  });

});

$(document).ready(function () {

  //처음들어갔을때 모습 만들기...
  $(".tab_content3").hide(); //tab_content 부분을 모두 숨김.
  $("ul.tabs3 li:first").addClass("active3").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
  $(".tab_content3:first").show(); //tab_contents중 첫번째꺼를 보여줌

  //On Click Event
  $("ul.tabs3 li").click(function () {

      $("ul.tabs3 li").removeClass("active3"); //Remove any "active" class
      $(this).addClass("active3"); //선택한 탭에만 active클래스 붙임
      $(".tab_content3").hide(); //모든 contents들 숨김

      var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
      /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
      .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
      $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
      return false;
  });

});

$(document).ready(function () {

  //처음들어갔을때 모습 만들기...
  $(".tab_content4").hide(); //tab_content 부분을 모두 숨김.
  $("ul.tabs4 li:first").addClass("active4").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
  $(".tab_content4:first").show(); //tab_contents중 첫번째꺼를 보여줌

  //On Click Event
  $("ul.tabs4 li").click(function () {

      $("ul.tabs4 li").removeClass("active4"); //Remove any "active" class
      $(this).addClass("active4"); //선택한 탭에만 active클래스 붙임
      $(".tab_content4").hide(); //모든 contents들 숨김

      var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
      /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
      .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
      $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
      return false;
  });

});

$(document).ready(function () {

  //처음들어갔을때 모습 만들기...
  $(".tab_content5").hide(); //tab_content 부분을 모두 숨김.
  $("ul.tabs5 li:first").addClass("active5").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
  $(".tab_content5:first").show(); //tab_contents중 첫번째꺼를 보여줌

  //On Click Event
  $("ul.tabs5 li").click(function () {

      $("ul.tabs5 li").removeClass("active5"); //Remove any "active" class
      $(this).addClass("active5"); //선택한 탭에만 active클래스 붙임
      $(".tab_content5").hide(); //모든 contents들 숨김

      var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
      /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
      .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
      $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
      return false;
  });

});


