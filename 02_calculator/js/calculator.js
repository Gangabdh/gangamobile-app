'use strict';
//ページ上の要素(Element)を参照
const elementSelect = document.getElementById("calcType");
const elementNum1 = document.getElementById("num1");
const elementNum2 = document.getElementById("num2");
const elementResult = document.getElementById("result");
const elemnetbtnEqal = document.getElementById("btnEqual");

//イベントを登録
elementSelect.addEventListener("change", clear);
elementNum1.addEventListener("change", clear);
elementNum2.addEventListener("change", clear);

elemnetbtnEqal.addEventListener("click", update);

/**計算し画面に結果を表示します。 */
  function update() {
    //計質結果を求める

    const result = calculate(
    Number(elementNum1.value),
    Number(elementNum2.value),
    elementSelect.value
    );

    //画面に表示
    elementResult.innerHTML = result; // テキストを代入
    }
   

    /**計算します。 */
function calculate(num1, num2, calcType){
   let result; 
   //計算の種類で処理を分岐
      switch(calcType) {
     case "type-add": //足し算場合
        result = num1 + num2;
        break;
     case "type-substract": //引き算の場合
        result = num1 - num2;
        break;
     case "type-multiply": //掛け算の場合
        result = num1 * num2;
        break;
     case "type-divide": //割引の場合
        result = num1 / num2;
        break;
   }
   return result;
}

function clear() {
   elementResult.innerHTML="";
}
   
        