// b_03_jQery_contents.js

(function($){
  
  // var exw = document.getElementsByClassName('.ex_wrap')[0];
  // exw.innerText ='<p>내용 작성</p>';
  
  var exWrap = $('.ex_wrap');
  exWrap.html('<p>하나의 요소를 삽입하기 위해 <span>html 문서를</span> 생성하여 처리</p>');
  // 선택자.html(내용) : 요소를 삽입, 후에 또 사용하면 기존 내용 사라짐
  // 선택자.text(텍스트) : 글자를 삽입

  var exHtmlCheck = exWrap.html();
  var exTextCheck = exWrap.text();
  var exConCheck = exWrap.contents();

  console.log(exHtmlCheck); // 태그 요소도 나옴
  console.log(exTextCheck); // 글자만 나옴
  console.log(exConCheck); // 배열은 아니지만 배열처럼 사용 요소들을 보여줌

  exWrap.html('<div class="inner_wrap"></div>');
  exWrap.children('div').html(exConCheck);

  exConCheck.wrap('<div class="inner"></div>');
  
  console.clear();
  //---------------------------------------------------------

  var innerWrap = exWrap.children('.inner_wrap');
  innerWrap.before('<p>before는 어디에 생성이 될 것인가?_01</p>');
  innerWrap.before('<p>before는 어디에 생성이 될 것인가?_02</p>');
  innerWrap.before('<p>before는 어디에 생성이 될 것인가?_03</p>');
  innerWrap.before('<p>before는 어디에 생성이 될 것인가?_04</p>');
  innerWrap.after('<p>after는 어디에 생성이 될 것인가?_01</p>');
  innerWrap.after('<p>after는 어디에 생성이 될 것인가?_02</p>');
  innerWrap.after('<p>after는 어디에 생성이 될 것인가?_03</p>');
  innerWrap.after('<p>after는 어디에 생성이 될 것인가?_04</p>');
  // 처음 만든것을 밀어내면서 생성

  innerWrap.append('<a href="#"> append는 어디에 a요소를 통해 생성되나?_01</a><br />');
  innerWrap.append('<a href="#"> append는 어디에 a요소를 통해 생성되나?_02</a><br />');
  innerWrap.append('<a href="#"> append는 어디에 a요소를 통해 생성되나?_03</a><br />');
  innerWrap.append('<a href="#"> append는 어디에 a요소를 통해 생성되나?_04</a><br />');
  // 선택자의 맨 마지막에 append 됨

  innerWrap.append('<div class="link_area"></div>');
  var linkarea = innerWrap.children('.link_area');

  // inkarea 내부에 innerWrap 내부에 있는 a요소를 옮겨담겠다. 사용권장
  linkarea.append(innerWrap.find('a'));
  
  // innerWrap 내부에 있는 br요소를 linkarea 내부에 옮겨담겠다.
  innerWrap.find('br').appendTo(linkarea);

  //---------------------------------------------------------------

  innerWrap.prepend('<button>버튼삽입_01</button>');
  innerWrap.prepend('<button>버튼삽입_02</button>');
  innerWrap.prepend('<button>버튼삽입_03</button>');
  innerWrap.prepend(linkarea);
  // 태그를 쓰면 태그 생성, 요소를 선택하면 자리 이동

  var btn = innerWrap.find('button');
  btn.prependTo(linkarea);

  // before
  // after
  // append / appendTo
  // prepend / prependTo






})(jQuery);