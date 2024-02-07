"use strict";

let n ="";
let nBefore = "";


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

/*Audio*/
let soundEndflag = "0"; // sound control

//OMIKUJI TEXT 
const btn1 = document.getElementById("btn1");
const omikujiText = document.getElementById("omikujiText");
const omikujiTextImage = document.getElementById("omikujiTextImage");

btn1.addEventListener("click",
  function() {
    //sound control
      if(soundEndflag === "1") {
         soundControl("end","");
  }
  
 let resultText = ["img/daikichi.png", "img/chukichi.png", "img/syokichi.png", "img/suekichi.png", "img/daikyo.png",];
 let resultMaxSpeed = [10,10,8,5,5,5];
 let resultMaxSize = [30,30,20,15,20,20];
 let resultImage = ["img/star.png", "img/sakura_hanabira.png", "img/sakura_hanabira.png", "img/sakura_habaira.png", "img/leaf.png", "img/snowflakes.png"];
 let resultSound = ["sound/omikuji_sound1.mp3", "sound/omikuji_sound2.mp3", "sound/omikuji_sound3.mp3", "sound/omikuji_sound4.mp3","sound/omikuji_sound5.mp3",];

 // let n = Math.floor(Math.random() * resultText.length);
 while(n ===nBefore) {
     n =Math.floor(Math.random() * resultText.length);
 }
 nBefore = n; //nの値をsave

 omikujiTextImage.src = resultText[n];
 omikujiTextImage.classList.add("omikujiPaper");
 omikujiTextImage.addEventListener("animationend",
    function() {
      omikujiTextImage.classList.remove("omikujiPaper");
    },false
 );


 // sound control
 w_sound = resultSound[n];
 soundControl("start", w_sound);
 soundEndflag = "1";

  //snowfall stop
  $(document). snowfall("clear");

  setTimeout(
    function () {
      $(document).ready(function() {
        $(document).snowfall({
          maxSpeed : 5,
          minSpeed : 1,
          maxSize : 20,
          minSize : 1,
          image : resultImage[n]
        });
      });
    },
    "200"
  );

  },false
);


// sound control
let w_sound
let music
function soundControl(status, w_sound) {
  if(status === "start") {
    music = new Audio(w_sound);
    music.currentTime = 0;
    music.play();
  }
  else if(status === "end") {
    music.pause();
    music.currentTime = 0;
  }
}

