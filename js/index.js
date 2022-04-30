// 日期
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
hour=date.getHours();
minute=date.getMinutes();
second=date.getSeconds();
if(minute < 10){displayMinute = "0" + minute.toString();}
else{displayMinute = minute;}
if(hour < 10){displayHour = "0" + hour.toString();}
else{displayHour = hour;}

document.getElementById("current_date").innerHTML = year + "年"+ month + "月" + day + "日" ;
document.getElementById("current_time").innerHTML = displayHour + ":" + displayMinute ;

$(document).ready(function(){
    // 頁面轉換
    $('.message').click(function(){
        $('#Message_page').show();
    });
    $('#unclock_img').click(function(){
        $('#Message_page').show();
    });
    $('#back_btn').click(function(){
        $('#Message_page').hide();
        $('#message_box').hide();
    });
    // 簡訊頁面
    var $count_send=0;
    $('#send').click(function(){
        var $current_text = $('#input_text').val();
        if($('#input_text').val()!=""){
            if($count_send<1){
                $current_date = year + "年"+ month + "月" + day + "日"
                $('#content_box').append('<div class="content_date">'+$current_date+'</div>')
            }

            $('#content_box').append(
                '<div class="content_append"><div class="append_text">'
                +$current_text+'</div></div>')
            $('#input_text').val('');
            $count_send++;
        }
    })
        
});