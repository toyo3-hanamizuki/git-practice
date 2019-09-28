$(function(){
  // 高さの最大値を代入するための変数h
  var h = 0;

  // それぞれの要素の高さを調べる
  $("main div").each(function(){
    // 要素の高さと変数hの値を比較し、大きい方を変数hに代入
    if($(this).height() > h){
      h = $(this).height();
    }
  });

  // 要素の高さを変数hの値に統一
  $("main div").css("height", h + "px");
});
