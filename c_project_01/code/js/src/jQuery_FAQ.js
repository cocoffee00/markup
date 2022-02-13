// jQuery_FAQ.js



$.ajax({
  url : "../json/faq.json",
  context : document.body

}).done(function(data){
  var faq_data = data;


(function($){

  var faqBox = $('.faq_content_box');

  var i =0;
  var faqLen = faq_data.length;

  // 아코디언 박스 만들기
  var fnMkaccor = function(title,content){
    var faqAccor = '<dl><dt><button type="button"><div class="dot"></div><span>'+title+'</span><div class="bg_img"></div><div class="faq_icon"></div></button></dt><dd>'+content+'</dd></dl>';
    faqBox.append(faqAccor);
  };
  
  // 박스에 데이터 뿌리기
  fnMkaccor(faq_data[i].title,faq_data[i].content);


  // 아코디언 박스 여러개 만들기
  for( ; i<faqLen; i+=1){
    fnMkaccor(faq_data[i].title,faq_data[i].content);
  };


  // ================================================================
  var faqDl = faqBox.children('dl');
  var faqDt = faqDl.find('dt');
  var faqDtBtn = faqDt.find('button');
  var faqDd = faqDl.children('dd');

  // 박스 클릭시 아코디언 실행
  faqDt.on('click', function(e){
    e.preventDefault();

    var _this =$(this);
    var j = _this.parent().index();
    var dlJ = faqDl.eq(j);

    // _this.css({ 'font-size': 28+'px', 'font-weight': 700,'color': '#red'});
    
    if(dlJ.hasClass('on')){
        console.log(true);
      faqDl.removeClass('on');
      dlJ.find(faqDd).stop().slideUp();
    }else{
        console.log(false);
      dlJ.addClass('on');
      dlJ.siblings().removeClass('on');
      _this.next(faqDd).stop().slideDown();
      dlJ.siblings().find(faqDd).stop().slideUp();
    };
  });






})(jQuery);

});