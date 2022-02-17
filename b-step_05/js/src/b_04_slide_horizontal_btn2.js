// b_04_slide_horizontal_btn2.js

(function($){
// 기능설명
/**
 *  다음 버튼을 클릭시, .horizontal_slide 기능을 움직이도록 처리
 *  -기능 수행 전 .horizontal_slide 내부에 있는 요소(div)의 마지막 요소를 복제하여 앞으로 이동
 *  - .horizontal_slide 영역은 내부의 기존 갯수보다 +1된 값만큼 가로값 늘려주기
 *  - 보이는 내용은 무조건 첫번째 내용이 보이도록 처리
 */
//_________________________________________________________

// 변수 ---------------------------------------------------------
var slideSet = $('.slide_set');
var btnArea =slideSet.find('.slide_btn');
var nextBtn = btnArea.find('.next');
var prevBtn = btnArea.find('.prev');

var horizontal = slideSet.find('.horizontal_slide');
var horizontalDiv = horizontal.children('div');
var originDivLen = horizontalDiv.length;

var permission = true;
var i = 0;


// 함수 ---------------------------------------------------------
var nextBtnFn = function(){
  if (permission){
    permission = false;
    i += 1;
   
    if ( i >= originDivLen){
      horizontal.css({'marginLeft' : 100 + '%'});
      i = 0;
    }
    horizontal.stop().animate({'marginLeft' : -100 * i + '%'}, function(){
      permission = true;
    });
  } // permission
};

var prevBtnFn = function(){
  if(permission){
    permission = false;
    i -= 1;
    horizontal.stop().animate({'marginLeft' : -100 * i + '%'},function(){
      if( i<0){
        i = originDivLen -1;
        horizontal.css({ marginLeft : -100 * i + '%' });
      }
      permission = true;
    });
  }
};


// 기능수행 ---------------------------------------------------------
var cloneDiv =  horizontalDiv.eq(-1).clone();
horizontal.prepend(cloneDiv);

var newHorizontalDiv = horizontal.children('div');
var newDivLen = newHorizontalDiv.length;
horizontal.css({ 'width' : (100 * newDivLen) + '%', 'left' : -100 + '%' });
newHorizontalDiv.css({ 'width' : (100/newDivLen) + '%'});

// 이벤트 ---------------------------------------------------------

nextBtn.on('click',function(e){
  e.preventDefault();
  nextBtnFn();
  // if (permission){
  //   permission = false; // 클릭 한번만 허용
  //   i += 1;

  //   // horizontal.animate({'marginLeft' : -100 * i + '%'}, function(){
  //   //   if ( i >= originDivLen){
  //   //     i = -1;
  //   //     horizontal.css({ 'marginLeft' : 100 + '%'});
  //   //   }
  //   //   permission = true;
  //   // });

  //   if ( i >= originDivLen){
  //     horizontal.css({'marginLeft' : 100 + '%'});
  //     i = 0;
  //   }
  //   horizontal.stop().animate({'marginLeft' : -100 * i + '%'}, function(){
  //     permission = true;
  //   });

  // } // permission
}); // nextBtn.on('click')


prevBtn.on('click',function(e){
  e.preventDefault();
  prevBtnFn();
  // if(permission){
  //   permission = false;
  //   i -= 1;
  //   horizontal.stop().animate({'marginLeft' : -100 * i + '%'},function(){
  //     if( i<0){
  //       i = originDivLen -1;
  //       horizontal.css({ marginLeft : -100 * i + '%' });
  //     }
  //     permission = true;
  //   });
  // }
}); // prevBtn.on('click')




})(jQuery);