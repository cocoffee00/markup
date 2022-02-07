
var data=[
  {'title':'special', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_01.jpg' 
  , 'tag1': 'ice', 'tag2' : 'hot'  
},
  {'title':'espresso', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_02.jpg' 
  , 'tag1': 'ice', 'tag2' : 'hot'  
},
  {'title':'americano', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_03.jpg' 
  , 'tag1': 'ice', 'tag2' : 'hot'  
},
  {'title':'cafe latte', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_04.jpg' 
  , 'tag1': 'ice', 'tag2' : 'hot'  
},
  {'title':'cappucino', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_05.jpg' 
  , 'tag1': 'ice', 'tag2' : 'hot'  
},
  {'title':'cafe mocha', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_06.jpg' 
  , 'tag1': 'ice', 'tag2' : 'hot'  
},
  {'title':'caramel macchiato', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_07.jpg' 
  , 'tag1': 'ice', 'tag2' : 'hot'  
},
  {'title':'cafe ore', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_08.jpg' 
  , 'tag1': 'ice', 'tag2' : 'hot'  
},
  {'title':'cold brew', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_09.jpg' 
  , 'tag1': 'ice', 'tag2' : 'hot'  
},
  {'title':'cafe vienna', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_10.jpg' 
  , 'tag1': 'ice', 'tag2' : 'hot'  
},
  {'title':'cafe kahulu', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_11.jpg' 
  , 'tag1': 'ice', 'tag2' : 'hot'  
},
  {'title':'lutzen cappuccino', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_12.jpg' 
  , 'tag1': 'ice', 'tag2' : 'hot'  
},
  {'title':'soy latte', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_01.jpg' 
  , 'tag1': 'ice', 'tag2' : 'hot'  
},
  {'title':'mocha latte', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_01.jpg' 
  , 'tag1': 'ice', 'tag2' : 'hot'  
},
  {'title':'vanilla latte', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_01.jpg' 
  , 'tag1': 'ice', 'tag2' : 'hot'  
},
  {'title':'hand drop', 
  'content1':'2줄 정도에 해당하는', 'content2':'커피 메뉴에 대한 요약설명', img:'../img/menu/menu_01.jpg'
    , 'tag1': 'ice', 'tag2' : 'hot'}  
];

// .menu_list 안에 ul 생성
var menuList = document.querySelector('.menu_list');
menuList.innerHTML = '<ul></ul>';

// .menuList 안에 들어갈 ul을 mListUl로 생성
var mListUl = menuList.querySelector('ul');


// 리스트박스를 한 덩어리로 만듬 = 함수화 , 생성되는 박스는 지역변수
var fnMLBox = function(tit,con1,con2,img,tag){
  // ul안에 들어갈 li을 mListBox로 생성
  var mListBox = document.createElement('li');
  mListBox.innerHTML = ' <a href="#"> <div class="img_thum"></div><dl><dt>'+tit+'</dt><dd>'+con1+'</dd><dd>'+con2+'</dd></dl><div class="tag_list"><div class="tag_box">'+tag+'</div></div> </a>';

  // img 태그 안에 넣을 변수명 생성
  var bgImg = mListBox.querySelector('.img_thum');
  bgImg.style.backgroundImage = 'url('+img+')';


  // 태그는 ????? 
  var tagList = mListBox.querySelector('.tag_list');
  var tagBox = mListBox.querySelector('.tag_box');
  
  // mListUl(ul) 안에 mListBox()li 넣음
  mListUl.append(mListBox);
};


// 리스트박스 16개 생성 반복문 // 원하는 태그만 넣으려면 어떻게???
var i = 0;
for( ; i < data.length ; i+=1){
  fnMLBox(data[i].title, data[i].content1, 
    data[i].content2, data[i].img , data[i].tag1);
}


