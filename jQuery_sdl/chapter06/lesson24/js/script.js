$(function(){
  //ブラウザをスクロール
  $(window).scroll(function(){
      //スクロール量が300pxを超えているかをチェック
      if($(window).scrollTop() > 300){
          //超えている場合：header要素にsamllクラスを追加
          $("header").addClass("small");
      }else{
          //超えていない場合：header要素からsamallクラスを削除
          $("header").removeClass("small");
      }
  });

});
