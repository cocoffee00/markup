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
  };
  

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
  };


  var actionFn = function(i){
    viewCover = $('.view_cover');
    viewCover.eq(i).addClass('action');
  };
  

  
  var i = 0;
  for( ; i < dataLen ; i+=1 ){
    slideDivSetFn(i);
  }

  actionFn(0);
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
  var indiWrapper = '<ul class="slide_indicator blind_area"></ul>';
  var indiCode = '<li><a href="#" data-href="#"><span></span></a></li>';
  
  // 기능설정1
  slideWrapperCode.before(indiWrapper);
  var indiWrapperSelector = viewBox.find('.slide_indicator');

  // 함수
  var indicatorSetFn = function(n){
    indiWrapperSelector.append(indiCode);
    var indiSelector = indiWrapperSelector.find('li');
    indiSelector.eq(n).find('span').text(slideData[n].summary);
    indiSelector.eq(n).find('a').attr({'data-href': '.'+slideData[n].description});
  }


  // indicator 생성
  var j =0;
  for( ; j< dataLen; j += 1){
    indicatorSetFn(j);
  };




// $.ajax _______________________________________________________________

}); // jsonDate.done()


})(jQuery);