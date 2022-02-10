(function($){
//jQuery

// 기능을 정리
/** // 기능을 정리
 *  1. .nav_title에 마우스를 올렸을때 뒤에오는 .sub_list가 나타나게
 */




//--------------------------------------------------
// 변수
var accor2 = $('.accor2');
var accorLi = accor2.find('li');
var accorTitle = accorLi.find('.nav_title');
var accorSub = accorLi.find('.sub_list');
var timed =500;


//---------------------------------------------------
// 이벤트
accorTitle.on('mouseenter',function(e){
  e.preventDefault();
  $(this).next(accorSub).stop().slideDown();
  $(this).parent().siblings('li').find(accorSub).stop().slideUp();
});

// parent 와 parents 구분 확인!!!!!
accorTitle.children('button').on('focus',function(e){
  var i = $(this).parents('li').index();
  var j =  $(this).parents('li').siblings('li').index();
  accorLi.eq(i).find(accorSub).stop().slideDown();
  // $(this).next(accorSub).stop().slideDown();
  // $(this).parent().siblings('li').find(accorSub).stop().slideUp();
  console.log('i:'+ i);
});


// .accor2 영역에서 마우스가 벗어날 경우 .sub_list가 사라지게
accorTitle.on('mouseleave',function(e){
  e.preventDefault();
  accorSub.stop().delay(timed/2).slideUp();
});








})(jQuery);