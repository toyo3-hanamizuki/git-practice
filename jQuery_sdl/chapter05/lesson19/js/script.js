$(function(){
    //#acc1以外を縮まる
    $('dd[id != "acc1"]').css("width", "0px");

    //a要素をクリック
    $("a").click(function(){
        //currentBtnクラスが付いていなければ、if文の中を実行
        if(!$(this).hasClass("currentBtn")){
        //現在のコンテンツを縮める
        $(".current").animate({"width" : "0px"}, 300);

        //次のコンテンツを展開
        $($(this).attr("href")).animate({"width" : "800px"}, 300);

        //currentクラスを削除
        $("dd").removeClass();

        //展開されたコンテンツにcureentクラスを追加
        $($(this).attr("href")).addClass("current");

        //currrentBtnクラス削除
        $("a").removeClass();

        //選択されたタイトル（自分自身）にcurrentBtnクラス追加
        $(this).addClass("current");
        }
        return false;
    });
})