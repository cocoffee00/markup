// b_06_jQuery_eq_index


(function($){

  var check = $('.check');
  var checkLi = check.find('li');
  var checkBtn = checkLi.find('button');
  var set = $('.set');
  var setLi = set.find('li');

  //----------------------------------------

  // checkBtn.eq(0).css({ 'backgroundColor' : '#f07'})

  checkBtn.on('click',function(e){
    e.preventDefault();
    // $(this).css({ 'backgroundColor' : '#f07'});
    // index();  -> 선택된 요소의 순서값을 파악

    // 선택된 요소의 부모에 해당하는 요소의 순서
    var i = $(this).parent().index(); // ()안에 아무것도 안넣음
    console.log(i);
    
    setLi.eq(i).siblings().removeClass('action'); // 선택한 요소의 형제들에게 작동
    setLi.eq(i).addClass('action');

    // index() : 이벤트가 발생된 시점의 순서를 파악
    //  eq()   : i번째의 기능을 수행하기 위해 순서를 지정 

    // 선택시, 순서가 형제가 아닌데도 js는 그 순서값을 지정하여 처리가 가능하다.
    // 하나가 아닌 2이상의 여러 요소를 수행해야 하는 경우 jquery에서는 한번에 가능하지만 js 에서는 반복문과 함께 사용해야한다.
    



  });

  







})(jQuery);