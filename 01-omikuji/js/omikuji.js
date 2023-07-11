"use strict";

let n = "";
let nbefore = "";

window.addEventListener("DOMContentLoaded",
 function() {
  //ページ本体が読み込まれたタイミングで実行するコード
  // ヘッダーのテキストエフェクト
$("header").textillate({
  loop: false, 
  minDisplayTime: 2000, 
  initialDelay: 2000,
  autoStart: true, 
  in: { 
    effect: "fadeInLeftBig",
    delayScale: 1.5,
    delay: 50,
    sync: false,
    shuffle: true
  }
});

  //omikuji button(id="btn1")
  $(function(){
      ScrollReveal().reveal("#btn1", { duration: 9800});
  });
  setTimeout(
  function(){
        let popMessage = "いらっしゃい!おみくじ引いてって!";
        window.alert(popMessage);
    },
        "5000"
  );

} , false
);

//おみくじボタン 1
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click",
  function(){


  // const n = Math.floor(Math.random() * 3);

  // switch (n) {
  //       case 0:
  //         btn1.textContent = "very Happy!!";
  //         btn1.style.color = "#fff001";
  //         btn1.style.fontSize = "40px";
  //         break;
  //       case 1:
  //         btn1.textContent = "Happy!!";
  //         btn1.style.color = "#261e1c"; 
  //         btn1.style.fontSize = "30px";
  //         break;
  //       case 2:
  //           btn1.textContent = "unLucky!!";
  //           btn1.style.color = "#261e1c";
  //           btn1.style.fontSize = "20px";
  //         break;
  //  }

 btn1.style.transition = "1s"; 
 let resultText = ["大吉!!!!!", "吉!!!!", "中吉!!!", "小吉!!","末吉!", "凶。"];
 let resultColor = [ "#ff0000", "#c71585", "#ff1493", "#ff69b4", "#ff8c00", "#1e90ff"];
 let resultFontSize = ["55px", "50px", "45px", "40px", "35px", "30px"];
 let resultImage = ["img/star.png", "img/sakura_hanabira.png", "img/sakura_hanabira.png", "img/snowflakes.png"];
 let resultMaxSpeed = [10,10,8,5,5,5];
 let resultMaxSize = [30,30,20,15,20,20];
 let n = Math.floor(Math.random() * resultText.length);
 btn1.textContent = resultText[n];
 btn1.style.color = resultColor[n];
 btn1.style.fontSize = resultFontSize[n]; 
  
  //snowfall stop
  $(document).snowfall("clear");

  //let n = Math.floor(Math.random() * resultText.length);
  while (n === nbefore){
    n =Math.floor(Math.random() . resultText.length);
  }

  //jQuerry's snowfall
  $(document).ready(function() {
        $(document).snowfall({
          maxSpeed  : resultMaxSpeed[n],
          minSpeed : 1,
          maxSize : resultMaxSize[n],
          minSize : 1,
          image : resultImage[n]
        });


  });
 }, false
);
