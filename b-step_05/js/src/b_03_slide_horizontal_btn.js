// b_03_slide_horizontal_btn.js

(function($){
// 기능설명
/**
 *  .slide_set2 내부에 있는 버튼을 클릭시, 광고 내용이 이동하여 처리
 *  버튼을 클릭할때마다, 변수의 값이 증/감처리
 *  처리되는 변수값을 기준으로 슬라이드 광고가 이동
 */ 

 // 변수
 var slide = $('.slide_set2');
 var btnArea = slide.find('.slide_btn');
 var slideBtn = btnArea.children('button');

 var slide = slide.find('.slide');
 var horizonSlide = slide.children('.horizontal_slide');
 var horizonDiv = horizonSlide.children('div');
 var nextBte = btnArea.children('.next');
 var prevBte = btnArea.children('.prev');

 var i = 0;
 var horizonDivLen = horizonDiv.length;
 var timed = 500;

 // 함수
 var btnClickFn = function(){
  var percent;

  // i 값이 0보다 작을경우, 이전 버튼을 비활성(사라지게)
  // i 값이 갯수의 숫자(-1)보다 클경우, 다음 버튼을 비활성(사라지게)
  if( i<= 0){
    i = 0;
    prevBte.hide();
  }else if( i >= horizonDivLen-1 ){
    i = horizonDivLen-1;
    nextBte.hide();
  }else{
    slideBtn.show();
  }
  console.log(i);

  percent =  -100 * i;
  // horizonSlide.css({ 'marginLeft' : percent +'%'});
  horizonSlide.stop().animate({ 'marginLeft' : percent +'%'});
 };


 // 선행기능
 btnClickFn();






// 이벤트
slideBtn.on('click',function(e){
  e.preventDefault();

  var btnNext = $(this).hasClass('next');

  (btnNext) ? i += 1 : i -= 1;
  btnClickFn();

});


})(jQuery);