// main_ad_slide_01.js

(function($){
/**
 * 외부 데이터 불러와서 확인 $.ajax() / $.getJSON()
 */
var jsonDate = $.getJSON('../data/osam_main_slide_01.json');

jsonDate.done(function(data){

  // 변수
  var slideData = data; // json으로 불러올 데이터
  var slideType = 'position_slide';
  var dataLen = slideData.length;
  var viewBox = $('#viewBox');
  var viewCover;
  var setNum = 0;

console.log(slideData);

  // 기능구현 1
  var slideWrapperSet = '<div class="slide"><div class="slide_wrapper"></div></div>';
  viewBox.append(slideWrapperSet);

  var slideWrapperCode = viewBox.find('.slide_wrapper');
  slideWrapperCode.addClass(slideType);

  var slideDivSet = '<div class="view_cover"><div class="view_con_wrapper"><div class="view_content"><h3></h3><p></p><div class="link"><a href="#"><span class="blind">해당내용</span>바로가기<i class="fas fa-arrow-right"></i></a></div></div><figure class="image"><figcaption class="blind"></figcaption><p class="blind"></p></figure></div></div>';

  // 함수
  var slideBtn = function(){  
    var insertBtn = '<div class="slide_btn blind_area"><button type="button" class="next"><span>next</span><i class="fa-solid fa-angle-right"></i></button><button type="button" class="prev"><span>prev</span><i class="fa-solid fa-angle-left"></i></button></div>';
    slideWrapperCode.before(insertBtn);
  }; // slideBtn()
  

  var slideDivSetFn = function(n){
    slideWrapperCode.append(slideDivSet);

    //변수
    var slideN = slideData[n];
    var imgUrl ='../img/main_slide/';
    var slideDiv = slideWrapperCode.children('div').eq(n);
    
    var divTitle = slideDiv.find('h3');
    var divContentWrapper = slideDiv.find('.view_content');
    var divContent = divContentWrapper.find('p');
    var divLink = slideDiv.find('a');
    var divImg = slideDiv.find('.image');
    var imgCaption = divImg.find('figcaption');
    var imgContent = divImg.find('p');

    //기능
    slideDiv.css({ backgroundImage : 'url('+ imgUrl + slideN.background +')'});
    slideDiv.addClass(slideN.description);
    divTitle.text(slideN.title);
    divContent.text(slideN.contents);
    divLink.attr({href : slideN.link});
    divImg.css({backgroundImage : 'url(' +imgUrl+ slideN.image +')'});
    imgCaption.text(slideN.description);
    imgContent.text(slideN.summary);
  }; // slideDivSetFn()

  // 광고 위치 표시기능
  var actionFn = function(i){
    viewCover = $('.view_cover');
    viewCover.eq(i).addClass('action');
    viewCover.eq(i).siblings().removeClass('action');
  }; // actionFn()
  

  
  var i = 0;
  for( ; i < dataLen ; i+=1 ){
    slideDivSetFn(i);
  }

  actionFn(setNum);
  slideBtn(1);


  // _______________________________________________
  // 인디케이터 생성
  //_______________________________________________
  console.log(viewCover);

  //설명
  /**
   *  광고갯수를 파악하여 인디케이터 생성
   *  -해당하는 순서에 맞는 인디케이터에 action을 설정하여, 인지할 수 있도록
   */
  
  // 담을 코드 작성
  var indiWrapper = '<div class="slide_check_part"><ul class="slide_indicator blind_area"></ul><p><em class="now_view"></em> / <span class="total_view"></span></P></div>';
  var indiCode = '<li><a href="#" data-href="#"><span></span></a></li>';
  
  // 기능설정1 + 변수
  slideWrapperCode.before(indiWrapper);
  var slideCheckPart = viewBox.find('.slide_check_part');
  var indiWrapperSelector = viewBox.find('.slide_indicator');
  var viewLenCkNow = slideCheckPart.find('.now_view');
  var viewLenCkTotal = slideCheckPart.find('.total_view');
  var indiSelector;

  // 함수
  var indicatorSetFn = function(n){
    indiWrapperSelector.append(indiCode);
    indiSelector = indiWrapperSelector.find('li');

    var indiLiLink = indiSelector.eq(n).find('a');
    var indiLiSpan = indiLiLink.children('span');

    indiLiSpan.text(slideData[n].summary);
    indiLiLink.attr({'data-href': '.'+slideData[n].description});
  }; // indicatorSetFn(n)
  
  var indicatorCheckFn = function(n){
    viewLenCkNow.text(n+1);
    viewLenCkTotal.text(dataLen);
  }; // indicatorCheckFn(n)


  // indicator 생성
  var j =0;
  for( ; j< dataLen; j += 1){
    indicatorSetFn(j);
  };

  indicatorCheckFn(setNum);
  indiSelector.eq(setNum).addClass('action');


  //===========================================================
  // 실제 광고영역 동작처리
  /**
   *  - 다음/이전 버튼을 누르면 광고가 움직이게
   *  - 인디케이터를 부르면 광고가 움직이게
   *  - 마우스를 광고위에 올리면 일시정지, 벗어나면 일정시간마다 내용 변셩
   */

  // 변수
  var nextBtn = viewBox.find('.next');
  var prevBtn = viewBox.find('.prev');

  // 함수
  // 인디케이터 표시
  var indiSetFn = function(n){
    indiSelector.eq(n).addClass('action');
    indiSelector.eq(n).siblings().removeClass('action');
  }; // indiSetFn(n)

    // 슬라이드광고, indiSelector, 체크번호 모두 동시에 처리되어야 하는 기능으로 한번에 수행
    var actionNumSetFn = function(n){

      if( n >= dataLen ){
        n = 0;
        setNum = n;
      }else if( n < 0){
        n = dataLen -1;
        setNum = n;
      }

      actionFn(n);
      indicatorCheckFn(n);
      indiSetFn(n);
    }; // actionNumSetFn(n)
  
  


  // 이벤트
  nextBtn.on('click',function(e){
    e.preventDefault();
    // setNum += 1;
    actionNumSetFn(setNum+=1);
  });

  prevBtn.on('click',function(e){
    e.preventDefault();
    // setNum -= 1;
    actionNumSetFn(setNum--);
  })

  indiSelector.find('a').on('click',function(e){
    e.preventDefault();
    setNum = $(this).parent().index();
    // console.log(n);
    actionNumSetFn(setNum);
  })


// $.ajax _______________________________________________________________

}); // jsonDate.done()


})(jQuery);