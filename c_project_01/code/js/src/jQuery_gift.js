// jQuery_gift.js

// $.ajax({
//  url :
// context:
// }).done(function(){
// });

var gift_data = [
  {'title':'gift name','content':'2줄에 해당하는 상품에 대한 설명'},
  {'title':'gift name','content':'2줄에 해당하는 상품에 대한 설명'},
  {'title':'gift name','content':'2줄에 해당하는 상품에 대한 설명'},
  {'title':'gift name','content':'2줄에 해당하는 상품에 대한 설명'},
  {'title':'gift name','content':'2줄에 해당하는 상품에 대한 설명'}
];

var giftConBox = $('.gift_content_box');
var gifBoxLi = giftConBox.find('.gift_list');
gifBoxLi.html('<ul></ul>');
var giftUl = gifBoxLi.children('ul');

// gife 박스 보여주기
var fnMkBox = function(title,content){
  var giftBox = '<li class="list_box"><div class="img_thumb"></div><dl><dt>'+title+'</dt><dd><span>'+content+'</span></dd></dl><div class="detail_btn"><button type="button">상세보기1</button><button type="button">상세보기2</button><button type="button">상세보기3</button></div></li>';

  giftUl.append(giftBox);
  giftUl.addClass('.clearfix');
};

var i =0;
var listLen = gift_data.length;
for( ; i < listLen ; i+=1){
  fnMkBox(gift_data[i].title, gift_data[i].content);
}

//--------------------------???? 
// 다시 해보기 / 1번 박스만 모달 생성 /키보드 포커스 넣기 / 리스트랑 모달에 json으로

var giftConBox = $('.gift_content_box');
var giftLi = giftUl.children('li');
var detailBtn = giftLi.find('.detail_btn');
var tete = detailBtn.children().eq(0);

var _this =$(this);
var innerBtn = detailBtn.children('button').eq(0);

var tt = giftLi.find('button').eq(0);
var modalBtn = tt.eq(j);

var j = _this.parent();

// console.log(tete.text());



tete.on('click',function(e){
    e.preventDefault();
    console.log(tete.html());
    modalWindow.fadeIn();
  });
  
  
  var modalWindow = $('.modal_window');
  var modalClose = modalWindow.find('.close_btn');
  var closeBtn = modalClose.children('button');

// 모달 나타남
// modalWindow.fadeIn(function(){
//   closeBtn.focus();
// });

// 모달 사라짐
closeBtn.on('click',function(e){
  e.preventDefault();
  modalWindow.fadeOut();
});
