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
  console.log(dataFile);

  
}); // $.ajax()


})(jQuery);