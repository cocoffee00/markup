// b_05_show_hide.js

(function($){
  var exWrap = $('.ex_wrap');
  var galleryImg = exWrap.find('.gallery_img');
  var btnArea = exWrap.find('.btn');
  // var btnList = btnArea.children('li');
  var view = btnArea.find('.view');
  var fade = btnArea.find('.fade');
  var slide = btnArea.find('.slide');
  var classSet = btnArea.find('.class_set');
  var timed = 600;

  // galleryImg.css({ 'display' : 'block'});  확인용 테스트

  //-----------------------------------------------------
  // viewer( show / hide) / animate
    var viewBtn = view.children('button');

    viewBtn.eq(0).on('click',function(e){
      e.preventDefault(); // ()안에 아무것도 않넣음
      galleryImg.show(timed); // ()안에는 처리되는 시간
    });

    viewBtn.eq(1).on('click',function(e){
      e.preventDefault();
      galleryImg.hide(timed);
    });

    viewBtn.eq(2).on('click',function(e){
      e.preventDefault();
      galleryImg.toggle(timed);
    });
    //-------------------------------------------

    // fade( fadeIn / fadeOut/ fadeToggle) / animate
    var fadeBtn = fade.children('button');

    fadeBtn.eq(0).on('click',function(e){
      e.preventDefault();
      galleryImg.stop().fadeIn();
    });

    fadeBtn.eq(1).on('click',function(e){
      e.preventDefault();
      galleryImg.stop().fadeOut();
    });

    fadeBtn.eq(2).on('click',function(e){
      e.preventDefault();
      galleryImg.stop().fadeToggle();
    });

    //------------------------------------------
    // slide ( slideDown/ slideUp /slideToggle) / animate
    var slideBtn = slide.children('button');

    slideBtn.eq(0).on('click',function(e){
      e.preventDefault();
      galleryImg.stop().slideDown();
    });

    
    slideBtn.eq(1).on('click',function(e){
      e.preventDefault();
      galleryImg.stop().slideUp();
    });

    
    slideBtn.eq(2).on('click',function(e){
      e.preventDefault();
      galleryImg.stop().slideToggle( timed * 2);
    });

    //-----------------------------------------------
    // classSet (addClass/ removeClass/ toggleClass)
    var classSeteBtn = classSet.children('button');
    var act = 'act';

    classSeteBtn.eq(0).on('click',function(e){
      e.preventDefault();
      galleryImg.addClass(act);
    });

    classSeteBtn.eq(1).on('click',function(e){
      e.preventDefault();
      galleryImg.removeClass(act);
    });

    classSeteBtn.eq(2).on('click',function(e){
      e.preventDefault();
      galleryImg.toggleClass(act);
    });











})(jQuery);