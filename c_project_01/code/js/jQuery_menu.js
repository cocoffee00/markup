// jQuery_menu.js
(function($){


  var data = [ 
    {'title':'special','content1':'2줄 정도에 해당하는 커피 메뉴에 대한 요약설명'},
    {'title':'espresso','content1':'2줄 정도에 해당하는 커피 메뉴에 대한 요약설명'},
    {'title':'americano','content1':'2줄 정도에 해당하는 커피 메뉴에 대한 요약설명'},
    {'title':'cafe latte','content1':'2줄 정도에 해당하는 커피 메뉴에 대한 요약설명'},
    {'title':'cappucino','content1':'2줄 정도에 해당하는 커피 메뉴에 대한 요약설명'},
    {'title':'cafe mocha','content1':'2줄 정도에 해당하는 커피 메뉴에 대한 요약설명'},
    {'title':'caramel macchiato','content1':'2줄 정도에 해당하는 커피 메뉴에 대한 요약설명'},
    {'title':'cafe ore','content1':'2줄 정도에 해당하는 커피 메뉴에 대한 요약설명'},
    {'title':'cold brew','content1':'2줄 정도에 해당하는 커피 메뉴에 대한 요약설명'},
    {'title':'cafe vienna','content1':'2줄 정도에 해당하는 커피 메뉴에 대한 요약설명'},
    {'title':'cafe kahulu','content1':'2줄 정도에 해당하는 커피 메뉴에 대한 요약설명'},
    {'title':'lutzen cappuccino','content1':'2줄 정도에 해당하는 커피 메뉴에 대한 요약설명'},
    {'title':'soy latte','content1':'2줄 정도에 해당하는 커피 메뉴에 대한 요약설명'},
    {'title':'mocha latte','content1':'2줄 정도에 해당하는 커피 메뉴에 대한 요약설명'},
    {'title':'vanilla latte','content1':'2줄 정도에 해당하는 커피 메뉴에 대한 요약설명'},
    {'title':'hand drop','content1':'2줄 정도에 해당하는 커피 메뉴에 대한 요약설명'}
  ];

  // 변수

  var menuList = $('.menu_list');
  menuList.html('<ul></ul>');
  var listUl = menuList.find('ul');
  

  var fnMkBox = function(title,content1){
    var card = '<li><a href="#"><div class="img_thum"></div><dl><dt>'+title+'</dt><dd>'+content1+'</dd></dl><div class="tag_list"><div class="tag_box"></div></div></a></li>';
    listUl.append(card);
  };


  var i =0;
  var listLth = data.length;
  for ( ; i < listLth ; i += 1){
    fnMkBox(data[i].title,data[i].content1);
  };





})(jQuery);