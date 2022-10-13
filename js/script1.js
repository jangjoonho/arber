$( document ).ready( function() {
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
      });