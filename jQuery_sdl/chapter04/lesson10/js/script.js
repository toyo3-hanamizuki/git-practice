$(function(){
    //ブラウザをスクロール
    $(window).scroll(function(){
        //  ナビゲーションの新しい位置へ移動
        $("nav").stop().animate({"top" : $(window)
        .scrollTop() + 100},500);
    });

});
