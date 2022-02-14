// jQuery_event.js


// ajax로 이미지랑 데이터 뿌려주기=파일 따로 만들기
// 정리하면서 하기 
// $.ajax({
//  url :
// context:
// }).done(function(data){
// });

(function($){

  var event_data = [
    {'title':'summer flaver', 'content': '2022. 01. 05 - 2022. 02. 15'},
    {'title':'summer flaver', 'content': '2021. 09. 15 - 2021. 10. 01'},
    {'title':'summer flaver', 'content': '2021. 01. 05 - 2021. 03. 15'},
    {'title':'summer flaver', 'content': '2020. 08. 05 - 2020. 09. 15'},
    {'title':'summer flaver', 'content': '2020. 03. 01 - 2020. 05. 15'},
    {'title':'summer flaver', 'content': '2019. 08. 05 - 2019. 08. 15'}
  ]

var eventConBox = $('.event_content_box');
eventConBox.html('<ul></ul>');
var eventUl = eventConBox.find('ul');
var eventLi = eventUl.children('li');

var fnMkList = function(title,content){
  var box = '<ul><li class="event_list"><div data-img="Rectangle1.png"><button type="button"><i class="faq_icon"></i><div class="ck_icon"></div><dl><dt>'+title+'</dt><dd>'+content+'</dd></dl></button></div></li></ul>'

  // boxImg.css({ 'backgroundImage':'url("'+img+'")'});
  
  eventUl.append(box);


};

// test 하단 버튼으로 모달 띄어보기
var btnn =$('.more_btn');
var btn2 =btnn.children();

var modalWindow = $('.modal_window');
var modalClose = modalWindow.find('.close_btn');
var closeBtn = modalClose.children('button');

var modalContent = modalWindow.find('.modal_content');
var modalP = modalContent.children('p');

var imgUrl = '../../img/event_page/';

var fnImgUrl = function(data){
  var url = 'url("'+imgUrl+data+'")';
  return url;
}

btn2.on('click',function(e){
  e.preventDefault();

  var img = btn2.attr('data-img');
  
  console.log(img);

  // 띄울 창의 내용에 담기
  modalContent.css({'backgroundImage' : fnImgUrl(img) });
 modalWindow.stop().fadeIn( function(){
    closeBtn.focus()
  });
    // 모달창 닫기 
    closeBtn.on('click',function(e){
      e.preventDefault();
      modalWindow.stop().fadeOut();
  
    });
      
    });

var i =0;
var dataLen = event_data.length;
for( ; i<dataLen ; i+=1){
  fnMkList(event_data[i].title,event_data[i].content);
}






})(jQuery);