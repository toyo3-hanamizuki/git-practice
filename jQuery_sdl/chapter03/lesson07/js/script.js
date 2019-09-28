$(function(){
    //サムネールをクリック
    $("a").click(function(){
        //a要素のhref属性を取得
        $("figure img").attr("src",$(this).attr("href"));

        return false;
    });

});
