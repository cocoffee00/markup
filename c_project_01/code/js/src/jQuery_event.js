// jQuery_event.js



(function($){

  // 1. 리스트박스구현

  var jsonDate = $.getJSON('../json/event.json');

  jsonDate.done(function(data){

    //----변수
    var eventData = data; //json으로 불러올 데이터
    var dataLen = eventData.length;
    var eventConBox = $('.event_content_box');
    var eventUlWrap ='event_wrap';

    var i = 0;
    console.log(eventData); 

    //----기능구현
    // .event_content_box에 ul생성
    var eventUlSet = '<ul class="clearfix"></ul>';
    eventConBox.append(eventUlSet); 
    // ul안에 class name 추가
    var eventUlWrapper = eventConBox.find('ul');
    eventUlWrapper.addClass(eventUlWrap);

    var eventLiSet = '<div><li class="event_list"><button type="button"><i class="faq_icon"></i><i class="ck_icon"></i><dl><dt></dt><dd></dd></dl></button></li></div>';
    
    //----함수
    // json에서 불러온 데이터를 넣어서 리스트 박스 만들기
    var eventLiSetFn = function(n){
      eventUlWrapper.append(eventLiSet);
      
      var evtN = eventData[n];
      var imgUrl = '../../img/event_page/';
      var eventLi = eventUlWrapper.find('li').eq(n);

      var evtTitle = eventLi.find('dt');
      var evtContent = eventLi.find('dd');
      
      console.log('555'+eventLi.html());

      // eventLi.css({backgroundImage : 'url("'+ imgUrl+evtN.img+'")'});
      evtTitle.text('????');
      evtContent.text(evtN.content);
      console.log(evtTitle.text());
      };

      // for문으로 data 갯수만큼 박스 생성
      // for ( ; i < dataLen ; i+=1){
      // }

    












  }); // .jsonDate
























// var fnMkList = function(title,content,img){
//   var box = '<li class="'+img+'"><button type="button"><i class="faq_icon"></i><div class="ck_icon"></div><dl><dt>'+title+'</dt><dd>'+content+'</dd></dl></button></li>'
  
//   eventUl.append(box);
// };
// console.log(event_data[2].img);

// fnMkList(event_data[i].title,event_data[i].content);
// var eventLi = eventUl.children('li');

// var slideBgFn = function(n){
//   var imgUrl = '../img/event_page/';
//   var slideDiv = eventUl.children('.event_list').eq(n);

//   slideDiv.css({backgroundImage : 'url'+ imgUrl+')'});
//   console.log(imgUrl);
// };





// test 하단 버튼으로 모달 띄어보기
// var btnn =$('.more_btn');
// var btn2 =btnn.children();

// var modalWindow = $('.modal_window');
// var modalClose = modalWindow.find('.close_btn');
// var closeBtn = modalClose.children('button');

// var modalContent = modalWindow.find('.modal_content');
// var modalP = modalContent.children('p');

// var imgUrl = '../../img/event_page/';

// var fnImgUrl = function(data){
//   var url = 'url("'+imgUrl+data+'")';
//   return url;
// }

// btn2.on('click',function(e){
//   e.preventDefault();

//   var img = btn2.attr('data-img');
  
//   console.log(img);

//   // 띄울 창의 내용에 담기
//   modalContent.css({'backgroundImage' : fnImgUrl(img) });
//  modalWindow.stop().fadeIn( function(){
//     closeBtn.focus()
//   });
//     // 모달창 닫기 
//     closeBtn.on('click',function(e){
//       e.preventDefault();
//       modalWindow.stop().fadeOut();
  
//     });
      
//     });


// 박스리스트 여러개 만들기
// var i =0;
// var dataLen = event_data.length;
// for( ; i<dataLen ; i+=1){
//   fnMkList(event_data[i].title,event_data[i].content);
// }







})(jQuery);