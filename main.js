//最初のaddEventListenerは、HTML初期文書が読み込まれて表示された時点で適用されるという宣言
window.addEventListener("DOMContentLoaded",function(){
    //Idプロパティが指定されている文字列を読み込んで、要素を表すオブジェクトを返す。(HTMLで以下に記入したidのついた要素を取得する)
    var true_area = document.getElementById("true_area");
    var false_area = document.getElementById("false_area");
    var true_btn = document.getElementById("true_btn");
    var false_btn = document.getElementById("false_btn");

//ここからは上で取得した要素にイベント（〇〇したら動作する）をつける。
    true_btn.addEventListener("click",function(){
        //clickされたら、iconというclassを付与した、spanタグをHTML文書に生成するぞ!という意味になる
        icon = document.createElement("span");
        icon.setAttribute("class","icon"); //iconに属性をセット。classでiconをつけるって感じになる
            true_area.appendChild(icon)},false);
    
    false_btn.addEventListener("click",function() {
        icon = document.createElement("span");
        icon.setAttribute("class", "icon");
            false_area.appendChild(icon);
            }, false);
            }, false);  
              