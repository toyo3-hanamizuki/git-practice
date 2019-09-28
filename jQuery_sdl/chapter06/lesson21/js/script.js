$(function(){
    //バナー用配列
    var bannerArray = ["red", "yellow", "green","blue","brown"];

    //０～１未満の数を生成：値域0～０．９９９９...
    var num = Math.random();

    //numに5を描ける：値域０～４．９９９...
    num = num*5;

    //小数点を切り捨てる：０，１，２，３，４のうちいづれか
    num = Math.floor(num);

    //バナーを表示
    $("aside img").attr("src", "img/" + bannerArray[num] + ".jpg");

});
