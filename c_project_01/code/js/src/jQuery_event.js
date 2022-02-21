// jQuery_event.js



(function($){

  // 1. 리스트박스구현

  var jsonDate = $.getJSON('../json/event.json');
  var jsonModalDate = $.getJSON('../json/event_modal.json');


  jsonDate.done(function(data,moData){

    //----변수
    var eventData = data; //json으로 불러올 데이터
    var modalData = moData; //모달용 json 데이터
    var dataLen = eventData.length;
    var eventConBox = $('.event_content_box');
    var eventUlWrap ='event_wrap';
    
    var imgUrl = '../../img/event_page/';

    var i = 0;
    // console.log(eventData); 

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
      var eventLi = eventUlWrapper.find('li').eq(n);

      var evtTitle = eventLi.find('dt');
      var evtContent = eventLi.find('dd');
      
      eventLi.css({backgroundImage : 'url("'+ imgUrl+evtN.img+'")'});
      evtTitle.text(evtN.title);
      evtContent.text(evtN.content);
      //________________________________________________________________
      
      // 모달 변수
      var modalWindow = $('.modal_window');
      var modalWrap = '   <div class="modal_data"><div class="close_btn"><button type="button"><span class="blind">닫기</span><i class="fa-solid fa-circle-xmark"></i></button></div><div class="modal_content"><h2>title</h2><span class="content1"><p>내용물들어갈부분</p></span><div class="modal_img1">img</div></div></div><div class="modal_bg"></div>';
      modalWindow.append(modalWrap);


      var modalClose = modalWindow.find('.close_btn');
      var closeBtn = modalClose.children('button');
      var eventLiButton = eventLi.find('button');




      // 모달창 열기
      eventLiButton.on('click',function(e){
        e.preventDefault();
        modalWindow.show();
      });

      // 모달창 닫기
      closeBtn.on('click',function(e){
        e.preventDefault();
        modalWindow.stop().fadeOut();
      });

      };

      // for문으로 data 갯수만큼 박스 생성
      for ( ; i < dataLen ; i+=1){
        eventLiSetFn(i);
      };

   
      

      // var modalP = modalContent.children('p');

      // console.log(eventLi.html());


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
      // modalWindow.stop().fadeIn( function(){
      //     closeBtn.focus()
      //   });
      //     // 모달창 닫기 
      //     closeBtn.on('click',function(e){
      //       e.preventDefault();
      //       modalWindow.stop().fadeOut();
        
      //     });
            
      //     });










  }); // .jsonDate












})(jQuery);