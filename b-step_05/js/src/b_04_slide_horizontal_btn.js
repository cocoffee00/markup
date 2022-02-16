// b_04_slide_horizontal_btn.js

(function($){
  // 기능설명
  /**
   *  버튼 클릭시 .horizontal_slide 가로로 이동하게 만들기(무한)
   *  -next 클릭시 .horizontal_slide 가로 1칸 이동 (margin-left:-100%)
   *  -움직이고 난 후 내부 div 의 첫번째를 마지막으로 강제 이동, 동시에
   *  .horizontal_slide를 원위치로 이동 (margin-left:0)
   */

  //변수 ____________________________________________
  var slideSet = $('.slide_set');
  var btnArea = slideSet.find('.slide_btn');
  var nextBtn = btnArea.find('.next');
  var prevBtn = btnArea.find('.prev');

  var horizontal = slideSet.find('.horizontal_slide');
  var horizonDiv = horizontal.children('div'); // 01-02-03-04-05

  var permission = true; 


  //함수 ____________________________________________


  //기능수행 ____________________________________________


  //이벤트 ____________________________________________

  //next 버튼 클릭시 수행
  nextBtn.on('click', function(evt){
    evt.preventDefault();
    // nextBtn.hide();

  if(permission){
    permission = false;

    horizontal.animate({ 'marginLeft' : -100 + '%' }, function(){
      var divFirst = horizonDiv.eq(0);
      // divFirst.appendTo(horizontal);
      horizontal.append(divFirst); //  02-03-04-05-01 일것 같지만 맨 처음 값 그대로임( 01-02-03-04-05)
      horizontal.css({ 'marginLeft' : 0});
      horizonDiv = horizontal.children('div'); // 변수 horizonDiv를 02-03-04-05-01로 재설정
      // nextBtn.show();
      permission = true;
    });

  } // if()
  });
  

  //prev 버튼 클릭시 수행
  prevBtn.on('click',function(evt){
    evt.preventDefault();
    // prevBtn.hide();
    
    if(permission){
    permission = false;
    
    var divLast = horizonDiv.eq(-1);
    horizontal.prepend(divLast);
    horizontal.css({ 'marginLeft' : -100 + '%' });
    horizontal.animate({ 'marginLeft' :0 }, function(){
      horizonDiv = horizontal.children('div');
      // prevBtn.show();
      permission = true;
    });
  } // if()
      

  });





})(jQuery);