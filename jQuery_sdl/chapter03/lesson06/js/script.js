$(function(){
    //背景とアラートボックスを非表示にする
    $("#bg").hide();

    //「click ,me!」ボタンをクリック
    $("#click").click(function(){
        //背景とアラートボックスをフェードインする
        $("#bg").fadeIn(300);
    });
    
    //「OK」ボタンをクリック
    $("#ok").click(function(){
        //背景とアラートボックスをフェイドアウトする
        $("#bg").fadeOut(300);
    });

});
