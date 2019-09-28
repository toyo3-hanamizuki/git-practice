$(function(){
    //アイコンをマウスオーバー
    $("li").hover(function(){
        //body内の最後に追加
        $("body").append('<div id="tooltip"><p></p></div>');

        //ツールチップのp要素にアイコンのalt属性の値を追加
        $("#tooltip p").html($(this).children().attr("alt"));

        //ツールチップを非表示に
        $("#tooltip").hide();

        //ツールチップの縦位置：アイコンの縦位置-角丸四角形の高さ－三角形高さ
        $("#tooltip").css("top", $(this).offset().top -
        $("#tooltip").height() - 18);

        //ツールチップの横位置：アイコンの横位置＋（アイコンの幅－ツールチップの幅）/2
        $("#tooltip").css("left", $(this).offset().left - 
        ($("#tooltip").width() - $(this).width())/2);

        //ツールチップをフェードイン
        $("#tooltip").fadeIn();

    },function(){
        //ツールチップを削除
        $("#tooltip").remove();
    });

});
