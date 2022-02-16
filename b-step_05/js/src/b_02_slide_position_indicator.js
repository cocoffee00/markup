// b_02_slide_position_indicator.js

(function($){

// 기능설명
/**
 *  -인디케이터를 선택시, 그에따른 이미지 내용을 나타나게 만들자
 *   [ok] .indicator 요소 선택이 몇번째인지 인지
 *   [ok] .slide_wrapper 내부의 div가 몇번째가 나타나야하는지
 *   [ok] 나타나야하는 요소 외의 다른 div는 사라지게 만들기
 *   [ok] .slide_wrapper 내부의 div에 .action 처리 (추가/해제)
 *   [ok] .indicator 내부의 li에서 .action 처리 (추가/해제)
 *  -------------------------------------------------------------
 *   .slide_wrapper 내부의 div가 나타나지만 보이지 않게 처리 (display:block)
 *   .slide_wrapper 내부의 div의 .action으로 처리된 요소를 서서히 사라지게 만들기
 *   나타난 div 요소에 .action을 처리(z-index), 이전요소에서는 .action을 삭제
 */

//변수
  var slideSet = $('.slide_set');
  var indiWrap = slideSet.find('.indicator');
  var indiUl = indiWrap.children('ul');
  var indiLi = indiUl.children('li');
  var indiLink = indiLi.children('a');

  var slidePart = slideSet.find('.slide');
  var slideWrap = slidePart.find('.slide_wrapper');
  var slideDiv = slideWrap.children('div');

  var i = 0, j = i;
  var timed = 500;

// 함수
var slideDivFn = function(){
  slideDiv.eq(i).show();
  slideDiv.eq(j).fadeOut(timed/2,function(){
      slideDiv.eq(i).addClass('action');
      slideDiv.eq(j).removeClass('action');
      j = i;
  });
};

var indiCheckFn = function(){
  indiLi.eq(i).addClass('action');
  indiLi.eq(i).siblings().removeClass('action');
};

// 선행 기능
slideDiv.eq(i).show();




// 이벤트
/* // step 1 ----------------------------------------
indiLink.on('click',function(e){
  e.preventDefault();
  i =$(this).parent().index();

  slideDiv.eq(i).addClass('action');
  slideDiv.eq(i).siblings().removeClass('action');

  indiLi.eq(i).addClass('action');
  indiLi.eq(i).siblings().removeClass('action');
});
*/ //----------------------------------------------------

// step 2 -----------------------------------------------
indiLink.on('click',function(e){
  e.preventDefault();

  i =$(this).parent().index();
  // 위에 함수로 만듦 :indiCheckFn
  // indiLi.eq(i).addClass('action'); 
  // indiLi.eq(i).siblings().removeClass('action');
  indiCheckFn();
  slideDivFn();



  // 위에 함수로 만듦 : slideDivFn
  // slideDiv 순번에 맞는 요소를 먼저 나타나게 
  // slideDiv.eq(i).show();
  // slideDiv.eq(i).show(function(){
    // 이전에 있던 .action이었던 요소를 부드럽게 사라지게 하겠다.
    // var j =0 , classCheck;
    // var len = slideDiv.length;
    // for ( ; j <=len ; j+=1 ){
    //   classCheck = slideDiv.eq(j).hasClass('action'); //hasClass로 찾은 class는 true를 도출
    //   if ( classCheck === true){
    //     console.log(j);
    //     break;
    //   }
    // }
    // slideDiv.eq(j).fadeOut(timed/2,function(){
    //   slideDiv.eq(i).addClass('action');
    //   slideDiv.eq(j).removeClass('action');
    //   j = i;
    //   // slideDiv.eq(i).siblings().removeClass('action');
    // });

  
});


// console.log(i);




})(jQuery);