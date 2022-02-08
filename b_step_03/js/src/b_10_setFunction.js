// b_10_setFunction

var a =10;
var b =0;
console.log( a);

setTimeout(function(){
  a+=100;
  console.log( a);
} , 1000 );

// setTimeout -> 1000 : 1초
// 일정 시간 뒤에 나타나게 . 1초뒤에 함수를 수행하고 끝

// setInterval(function(){
//   console.log(b);
//   b++;
// }, 1000);


var go;

var startFn = function(){
  go = setInterval(function(){
    b++;
    console.log (b);
  }, 500);
};

var stopFn = function(){
  clearInterval(go);
  // b = 0;  
  // stop을 누르면 0으로 다시 리셋됨
};

var exWrap = document.querySelector('.ex_wrap');
var btn = exWrap.querySelectorAll('button');
console.log ( btn);

btn.forEach(function(data, idx){
  data.addEventListener('click', function(){
    // if(idx === 0){
    //   startFn();
    // }else{
    //   stopFn();
    // } 아래 삼항연산자랑 같음
    (idx === 0) ? startFn() :  stopFn();
  })
});





