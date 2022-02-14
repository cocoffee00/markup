// b_11_tab_menu.js

(function($){
/** 
  $.getJSON("../json/menu.json", function(data){
    console.log(data);
  }); // json만 가져올 수 있음
*/

$.ajax({
  url :"../json/menu.json",
  context :document.body
}).done(function(data){
  var dataFile = data;
  // console.log(dataFile);

  var i =0;
  var len = dataFile.length;
  var tabTitle = [];

  for( ; i < len ; i+=1 ){
    tabTitle.push( dataFile[i].type);
  }
  // console.log(tabTitle);

  //________________________________________tab menu title 설정

  // 배열.filter(function(data,index){});
  // indexOf() : 문자열/배열 에서 작성한 요소와 일치하는 순서를 파악


  // 중복되는 배열의 값을 정리해주는 기능
   var tabTitleCk = tabTitle.filter(function(data,index){
      // console.log(data,index);
      // return data === 'coffee';
      return tabTitle.indexOf(data) === index;
    });

    //var idx = tabTitle.indexOf('tea'); // <-dataFile안에 tea가 몇번째에서 처음 시작하는지 알려줌 (ex:16 ->16번부터 tea가 시작됨)
    //console.log(idx);
    console.log(tabTitleCk);










  
}); // $.ajax()
})(jQuery);