$(function(){
    //変数  dis:初期値250
    var dis = 250;
    //アイコンをクリック
    $("button").click(function(){
        //bodyの子要素のmargin-leftをそれぞれ250px増やす
        $("body").children().animate({"margin-left":
    "+=250px"},200);

    //disに-1をかける
    dis *= -1;
    });

});
