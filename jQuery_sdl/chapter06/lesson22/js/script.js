$(function() {
    //全てのアラート分を非表示にする
    $(".alert").hide();

    //送信ボタンをクリック
    $("#submitBtn").click(function(){
        //チェック用の変数sendFlag
        var sendFlag = true;


        //一行入力フィールドのチェック
        if(!$("#text").val()){
            $("#textSection.alrt").show();
            sendFlag = false;//入力がなければfalseに
        }else{
            $("#textSection.alert").hide();
        }
            //ラジオボタンチェック
            var radioChk = $('input[name="radio"]:checked').length;
            //選択されたラジオボタンの数を調べる
            if(radioChk == 0){
                //選択がない：アラート分を表示
                $("#radioSection.alert").show();
                sendFlag = false;//選択がなければfalseに
            }else{
                //選択があるアラート分非表示
                $("#radioSection.alert").hide();
            
            }
            //チェックボックスのチエック
            var chkboxChk = $('input[name="checkbox"]:checked').length;
            //選択されたチェックボックスの数を調べる
            if(chkboxChk < 3){
                //選択が3つ未満：アラート文を表示
                $("#checkboxSection.alert").show();
                sendFlag = false; //選択が3未満ならfalseに
            }else{
                //選択が3つ以上：アラート分を非表示
                $("#checkboxSection.alert").hide();
            }

            //セレクトボックスのチェック
            if($("select").val() == "none"){
                //選択がない：アラート分表示
                $("#selectSection.alert").show();
                sendFlag = false;
            }else{
                //選択がある：アラート分を非表示
                $("#selectSelection.alert").hide();
            }

            //複数行入力フィールドをチェック
            if(!$("#textarea").val()){
            //入力がない：アラート分表示
            $("#textSection.alert").show();
            sendFlag = false;
        }else{
            //入力がある：アラート分非表示
            $("#textSection.alert").hide();
        
        }
        //変数sendFlagの値をチエック
        if(sendFlag == false){
               return false;//falseであれば送信を許可しない（そうでなければ送信）
        }


    });

});
