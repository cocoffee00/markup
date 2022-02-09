//  b_02_jQery_selector.js

(function($){
  // console.log( $.fn);

  /*
    body { background-color: #cdf};
  */
  // var body = document.getElementsByTagName('body')[0];
  // var body = document.querySelector('body');
  var body = $('body');
  body.css({ 'backgroundColor' : '#cdf'});
  // 'console'.log(body);
  // ---------------------------------------------------------------

  // 선택자1 : $('css선택자');
  // css표현 : 선택자.css({속성명 : '값', 속성명 : '값', '싱글쿼터를 쓰거나 카멜케이스를 사용': '싱글쿼터로 감싸기'});
  $('.ex_wrap').css({
    'backgroundColor' : '#fff',
    'border' : '1px solid #777'
  });

  var box = $('#box');
  box.css({
    'backgroundColor' : '#fd7' , 'padding' : '20px'
  });

  // box > h3 {} : 2번째 변수에 넣어서 처리하는걸 더 권장
  $('#box > h3').css({ 'fontSize' : 1.3 +'rem'});
  var boxH3 = box.children('h3');
  boxH3.css({ 'fontWeight' : 700, 'marginBottom' : 20 + 'px'});

  // box h3 {}
  $('#box  h3').css({ 'textIndent' : 15 +'px'});
  var boxFindH3 = box.find('h3');
  boxFindH3.css({ 'color' : '#f05'}); 

  // 메소드 체인 : 선택자.메소드().메소드().....
  //-----------------------------------------------------------------------
  // 선택자
  var boxP = box.children('p');
  box.children('ol').addClass('list_wrap');
  var boxList = box.children('.list_wrap');
  
  boxP.css({ 'backgroundColor' : '#555', 'marginBottom' : 20+'px'});
  boxList.css({
    'border' : '2px solid #777', 'margin' : '10px 0'
  });

  //-----------------------------------------------------------------------
  // 선택자에서 순서를 가르키는것 -> eq(순번) : 순번은 첫번째가 0

  boxList.eq(0).css({ 'backgroundColor' : '#fff', 'padding' : '10px'});
  boxList.eq(1).css({ 'backgroundColor' : '#ddf', 'padding' : '15px'});
  boxList.eq(2).css({ 'backgroundColor' : 'rgba(255,255,255,0.3)', 'padding' : '10px'});
  //----------------------------------------------------------

  var boxListEq_01 = boxList.eq(0);
  // $('#box').children('.list_wrap').eq(0).children('li');
  var boxUl_01_li = boxListEq_01.children('li');

  boxUl_01_li.eq(0).next().css({ 'backgroundColor' : '#ddf'});  // next : 선택한 eq 다음을 선택
  boxUl_01_li.eq(0).nextAll().css({ 'color' : 'red'});          // nextAll : 선택한 eq 다음의 모두 선택
  boxUl_01_li.eq(-2).css({ 'fontSize' : '1.5rem'});             // eq(-2) : 뒤에서 두번째 선택
  boxUl_01_li.eq(-2).prev().css({ 'textIndent' : '30px'});      // prev() : 선택한 eq 바로 앞 선택
  boxUl_01_li.eq(-2).prevAll().css({ 'textTransform' : 'uppercase'}); // prevAll() : 선택한 eq 바로 앞의 모두 선택

  var boxOl_li = boxList.eq(-1).children('li');
  boxOl_li.css({ 'color' : 'green'});
  boxOl_li.eq(5).css({ 'fontSize' : '1.4rem'});
  boxOl_li.eq(5).siblings().css({ 'fontWeight' : '700', 'color' : '#f05'});

  var olEq5 =  boxOl_li.eq(4);
  boxOl_li.not( olEq5).css({ 'textAlign' : 'center'});
  //----------------------------------------------------------------------------

  var box2 = $('#box');
  var box2_other = box2.children('.other_list');
  var box2_li = box2_other.children('li');

  var other = $('#other');
  box2_li.eq(2).css({ 'backgroundColor' : '#7af'});
  other.children('button').css({ 'color' : '#fff', 'fontWeight' : '700'})
  other.parent().css({ 'backgroundColor' : '#dfa', 'borderRadius' : '30px'});
  other.parent().parent().css({ 'padding' : '30px', 'borderRadius' : '20px'});
  other.parents('.code_exam').css({ 'border' : '2px dotted #f00'}); // parents() 쓰고 소괄호 안에 범위 넣어주기. 안그러면 html,body까지 다 적용됨

  other.css({ 'transform' : 'rotate(45deg)'});
  other.animate({ 'marginLeft' : '200px'});
  // jQuery.animate() 메소드가 동작하지 않는 css들 :
  // transition, animation, transform, borderRadius












})(jQuery);