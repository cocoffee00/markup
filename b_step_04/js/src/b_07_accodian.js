// b_07_accordian.js

(function($){

  // 사용할 기능 / 내용 정리
  // 1. dt를 클릭시 이후에 dd를 나타나게 만들기
  // - dt를 클릭시 선행 이벤트 발생 정지
  // - dt>button을 키보드 처리시 dd를 나타나게
  // 2. dt를 클릭시 이후에 오는 형제인 모든 dd를 나타나게
  // 3. dt를 클릭시 다른형제(siblings) dl에 있는 dd를 사라지게
  // 4. dt를 클릭시 뒤에오는 요소에 dd가 나타나 있는 경우 나머지 dd는 사라지게
  // - class를 삽입하여 dd가 존재하면 사라지게, 없다면 나타나게


  // 변수지정
  var accor = $('.accor');
  var accorDl = accor.children('dl');
  var accorDt = accorDl.children('dt');
  var accorDd = accorDl.children('dd');

  // 이벤트 기능
  accorDt.on('click',function(e){
    e.preventDefault();
    // console.log( $(this).text());
// -------------------------------------------------
    // 1.선택한 dt 이후에 오는 dd를 나타나게 함
    // - 5번 기능으로 주석 처리
    var _this = $(this);
    // _this.nextAll(accorDd).slideDown();
//---------------------------------------------------------------
    // 2.선택한 dt의 부모(dl)의 다른형제의 자식인 dd를 사라지게
    // 3번과 중복이라 주석처리
    // _this.parent().siblings(accorDl).find(accorDd).hide();
 //---------------------------------------------------------------   
    // 3.선택한 dt의 부모의 순서
    var i = _this.parent().index();
    // 3-1. 파악된 순서를 제외한 dl 내부에 존재하는 dd 사라지게 하기
    // - 5번 기능으로 주석 처리
    // accorDl.eq(i).siblings().find('dd').slideUp();
//------------------------------------------------------------
    // 4. 선택한 dt에 클래스 삽입 - 5번 기능으로 주석 처리
    // _this.parent().eq(i).addClass('on');
    // accorDl.eq(i).addClass('on');
    // accorDl.eq(i).siblings().removeClass('on');
//----------------------------------------------------------------
    // 5. class 유무 파악 후 추가 기능을 설정
    var dlI = accorDl.eq(i);
    // class 기능의 유무 : 선택자.hasClass('className'); -> true/false

    // 이해 완 - 버튼을 누르기 전에는 다 false임 -> 그래서 누른 dl에 on을 달아주고
    // 그 외 형제 dl은 on을 없애줌 -> 누른 dl의 dd를 펼쳐주고 다른 dl의 dd는 닫아줌 ->
    // 눌렀던 dl을 다시 누르면 on이 사라지고 다시 false가 된 후 dd를 닫게됨 
    // 콘솔로 찍어보지 않았다면 헷갈렸을듯 
    if(dlI.hasClass('on')){
      console.log('teru');
      accorDl.removeClass('on');
      dlI.find('dd').stop().slideUp();
    }else{
      console.log('false');
      dlI.addClass('on');
      dlI.siblings().removeClass('on');
      _this.nextAll(accorDd).stop().slideDown();
      dlI.siblings().find('dd').stop().slideUp();
    };

  });





})(jQuery);