
var data=[
  {'title':'special', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_01.jpg'},
  {'title':'espresso', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_02.jpg'},
  {'title':'americano', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_03.jpg'},
  {'title':'cafe latte', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_04.jpg'},
  {'title':'cappucino', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_05.jpg'},
  {'title':'cafe mocha', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_06.jpg'},
  {'title':'caramel macchiato', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_07.jpg'},
  {'title':'cafe ore', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_08.jpg'},
  {'title':'cold brew', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_09.jpg'},
  {'title':'cafe vienna', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_10.jpg'},
  {'title':'cafe kahulu', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_11.jpg'},
  {'title':'lutzen cappuccino', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_12.jpg'},
  {'title':'soy latte', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_01.jpg'},
  {'title':'mocha latte', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_01.jpg'},
  {'title':'vanilla latte', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_01.jpg'},
  {'title':'hand drop', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_01.jpg'}  
];

// .menu_list 안에 ul 생성
var menuList = document.querySelector('.menu_list');
menuList.innerHTML = '<ul></ul>';

// .menuList 안에 들어갈 ul을 mListUl로 생성
var mListUl = menuList.querySelector('ul');


// 리스트박스를 한 덩어리로 만듬 = 함수화 , 생성되는 박스는 지역변수
var fnMLBox = function(tit,con1,con2,img){
  // ul안에 들어갈 li을 mListBox로 생성
  var mListBox = document.createElement('li');
  mListBox.innerHTML = ' <div class="img_thum"></div><dl><dt>'+tit+'</dt><dd>'+con1+'</dd><dd>'+con2+'</dd></dl>';

  var bgImg = mListBox.querySelector('.img_thum');
  bgImg.style.backgroundImage = 'url('+img+')';
  // mListUl(ul) 안에 mListBox()li 넣음
  mListUl.append(mListBox);
};


// 리스트박스 16개 생성 반복문
var i = 0;
for( ; i < data.length ; i+=1){
  fnMLBox(data[i].title, data[i].content1, data[i].content2, data[i].img);
  // console.log(data[i].title, data[i].content1, data[i].content2);
}


// 메뉴 리스트 하단에 보이는 태그 모음인데
var tagBax = document.createElement('div');
tagBax.innerHTML = '<span>ice</span>';

