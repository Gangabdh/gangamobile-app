"use strict";

//ページ本体が読み込まれたタイミングで実行するコード
window.addEventListener("DOMContentLoaded",
    function () {

        // 1.localStorageが使えるか 確認
        if (typeof localStorage === "undefined") {
            window.alert("このブラウザはlocal Storage機能が実装されていません");
            return;
        } else {
            viewStorage(); //localStorageからのデータの取得とテーブル表示
            saveLocalStorage(); //2.localStorageへの保存
            delLocalStorage(); //3.localStorageから 1件削除
            allClearLocalStorage(); //4.localStorageから全て削除
            selectTable(); // 5.データ選択
        }

    } , false

);

// 2.localStorageへの保存
function saveLocalStorage() {
    const save = document.getElementById("save");
    save.addEventListener("click",
        function(e) {
            e.preventDefault();
            const key = document.getElementById("textKey").value;
            const value = document.getElementById("textMemo").value;

            //値の入力チェック
            if (key== "" || value== "") {
                window.alert("Key, Memoはいずれも必須です。");
                return;
            } else {
                let w_confirm = window.confirm ("LocalStorageに \n 「"+ key + " " + value + "」 \nを保存(save) しますか?");
                //確認ダイアログで 「OK」 を押されたとき、保存する
                if (w_confirm === true) {
                 localStorage.setItem(key, value);
                 viewStorage(); //localStorageからのデータの取得とテーブル表示
                 let w_msg = "localStorageに" + key + " " + value + "を保存(save)しました。";
                 window.alert(w_msg);
                 document.getElementById("textKey").value = "";
                 document.getElementById("textMemo").value = "";
               } 
        }
        }, false
    );
};

// 3.localStorageから 選択されている行を件削除
function delLocalStorage() {
    const del = document.getElementById("del");
    del.addEventListener("click",
       function(e) {
        e.preventDefault();
        const chkbox1 = document.getElementsByName("chkbox1");
        const table1 = document.getElementById("table1");
        let w_cnt =  0; //選択されていれば "1" が返却される
        w_cnt = selectCheckBox("del"); //テーブルからデータを選択

        if(w_cnt >= 1) {
            // const key = document.getElementById("textkey").value;
            //const value = document.getElementById("textMemo").value;
            let w_confirm = window.confirm("LocalStorageから選択されている" + w_cnt + "件を削除(delete)しますか?");
            //確認ダイアログで [OK] を押されたとき、削除する
            if (w_confirm === true){
                for(let i = 0; i <chkbox1.length; i++){
                    if(chkbox1[i].checked) {
                        localStorage.removeItem(table1.rows[i+1].cells[1].firstChild.data);
                    }
                }
                viewStorage(); //localStorageからデータ取得とテーブルへ表示
                let w_msg = "localStorageから" + w_cnt + "件を削除(delete)しました。。";
                window.alert(w_msg);
                document.getElementById("textKey").value = "";
                document.getElementById("textMemo").value = "";
            }
        }
    } , false
    );
};


//4.localStorageから全て削除

function allClearLocalStorage() {

    const allClear = document.getElementById("allClear");
    allClear.addEventListener("click",

       function(e) {

        e.preventDefault();
        let w_confirm = confirm("LocalStorageのデータをすべて削除(allClear) します。\nよろしいですか?");
        //確認 ダイアログで [OK] を押されたとき、すべて削除する
        if(w_confirm === true) {
           localStorage.clear();
           viewStorage(); //localStorageからのデータ取得とテーブルへ表示
           let w_msg = "localStoragのデータをすべて削除(all clear)しました。";
           window.alert(w_msg);
           document.getElementById("textKey").value = "";
           document.getElementById("textMemo").value = "";
        }
    }, false
    );
};
//5.データ選択
function selectTable() {
   const select = document.getElementById("select");
   select.addEventListener("click",
    function(e) {
        e.preventDefault();
        selectCheckBox("select"); //テーブルからデータ選択
    }, false
   );

}

//テーブルからデータ選択
function selectCheckBox(mode) {
    //let w_sel = "0";
    let w_cnt = 0;
    const chkbox1 = document.getElementsByName("chkbox1");
    const table1 = document.getElementById("table1");
    let w_textkey = "";
    let w_textMemo = "";

    for(let i = 0; i < chkbox1.length; i++) {
        if(chkbox1[i]. checked) {
            if(w_cnt === 0) {
            //document.getElementById("textKey").value=  = table1.rows[i + 1].cells[1].firstChild.data;
            //document.getelemntById("textMemo").value = table1.rows[i + 1].cells[2].firstChild.data;
            //return w_sel = "1";
            w_textkey = table1.rows[i+1].cells[1].firstChild.data;
            w_textMemo = table1.rows[i+1].cells[2].firstChild.data;
        }
        w_cnt++;
    }
}
     document.getElementById("textKey").value = w_textkey;
     document.getElementById("textMemo").value = w_textMemo;

     if (mode === "select"){
     if(w_cnt ===1){
        return w_cnt;
     } else {
        window.alert("1つ選択(select) してください。");
     }
    }
    

     if(mode === "del") {
     if(w_cnt >= 1) {
        return w_cnt;
     }
     else {
       window.alert("1つ以上選択(select) してください。");
     }
    }   
 };

//localStorageからのデータの取得とテーブル表示

function viewStorage() {
    const list = document.getElementById("list");
    //htmlのテーブル初期化
    while (list.rows[0]) list.deleteRow(0);

    //localStorageすべての情報の取得

    for (let i = 0; i < localStorage.length ; i++) {
        let w_Key = localStorage.key(i);

        //localStorageのキーと値を表示
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        list.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        td1.innerHTML = "<input name='chkbox1' type='checkbox'>";
        td2.innerHTML = w_Key;
        td3.innerHTML = localStorage.getItem(w_Key);

    }

    $("#table1").tablesorter({    
       sortList:[[1, 0]]          
    });                           

    $("#table1").trigger("update"); 
};

